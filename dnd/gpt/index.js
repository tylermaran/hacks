require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai');

// To emulate a ChatGPT like feature, we add the prompts and responses
// to each new request so there is context to the incoming questions.
// Ex:
// [
//  'prompt: describe lord of the rings in one sentence',
//  'response: The Lord of the Rings is a fantasy novel written by J. R. R. Tolkien.',
//  'prompt: i meant the movie',
//  'response: The Lord of the Rings movies are a trilogy of fantasy movies based on the novel by J. R. R. Tolkien.',
// ]
const conversationLog = [];

const init = async () => {
	const configuration = new Configuration({
		organization: process.env.ORG,
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);
	return openai;
};

// OpenAPI completion endpoint
const makeARequest = async (prompt) => {
	const openai = await init();
	const completion = await openai.createCompletion({
		model: 'text-davinci-002',
		prompt: conversationLog.join('\n'),
		max_tokens: 50,
	});
	return completion.data.choices[0].text.trim();
};

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());

// Ping
app.get('/', (req, res, next) => {
	console.log(req);
	return res.status(200).send('pong');
});

// Prompt
app.post('/', async (req, res, next) => {
	const { prompt } = req.body;
	conversationLog.push(`prompt: ${prompt}`);
	const result = await makeARequest();
	conversationLog.push(
		result.includes('response: ') ? result : `response: ${result}`
	);
	return res.status(200).json({ conversation: conversationLog });
});

// 404s
app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// General error catching
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
		},
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
