require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

// Ping
app.get('/', (req, res, next) => {
	console.log(req);
	return res.status(200).send('pong');
});

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// Throw errors from anywhere in the app
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
