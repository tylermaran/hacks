require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Services
const { matchFacilities } = require('./src/matchFacilities');

// Ping
app.get('/', (req, res) => res.status(200).send('pong'));

// Fetch Data
app.get('/data', async (req, res) => {
	const { latitude, longitude, n } = req.query;
	const closestFacilities = await matchFacilities({
		latitude,
		longitude,
		n: parseInt(n),
	});
	res.status(200).json({
		n: closestFacilities.length,
		facilities: closestFacilities,
	});
});

// Throw errors from anywhere in the app
app.use((error, req, res) => {
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
