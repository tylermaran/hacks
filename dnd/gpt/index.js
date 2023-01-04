require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const init = async () => {
	const configuration = new Configuration({
		organization: 'org-vGS7yJQWy3lAArgBRQDlZsAy',
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);
	return openai;
};

const makeARequest = async () => {
	const openai = await init();

	const completion = await openai.createCompletion({
		model: 'text-davinci-002',
		prompt: 'Give a one sentence summary of lord of the rings',
		max_tokens: 50,
	});

	console.log(completion.data);
};

makeARequest();
