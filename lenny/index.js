import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Ping
app.get('/', (req, res, next) => {
	console.log(req);
	return res.status(200).send('pong');
});

// Save Entry
app.post('/log', (req, res, next) => {
	console.log(req.body);
	// Write to a database

	return res.status(200).send('pong');
});

app.get('/entries', (req, res, next) => {
	// Fetch entries

	return res.status(200).json({ entries: ['hello', 'hello again!'] });
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

export default app;
