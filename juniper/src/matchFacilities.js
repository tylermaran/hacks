const { fetchData } = require('./fetchData');
const { getFacilities, saveFacilities } = require('./db/facilities');

const matchFacilities = async ({ latitude, longitude, n }) => {
	const { lastModified, facilities } = await getFacilities();
	const last24 = new Date(Date.now() - 24 * 3600 * 1000);

	// If datastore has been updated in the last 24 hours
	// return cached data, else fetch new data
	if (new Date(lastModified) >= last24) {
		console.log('[RETURN FROM DB]');
		// Sort array by distance
		facilities.sort((a, b) => (a.distance > b.distance ? 1 : -1));

		// Limit responses
		const limit = n <= facilities.length ? n : facilities.length - 1;

		return facilities.slice(0, limit);
	} else {
		console.log('[FETCH NEW DATA]');
		// Returns sorted array by distance from user (haversine calc)
		const facilities = await fetchData({ latitude, longitude });

		// Sort array by distance
		facilities.sort((a, b) => (a.distance > b.distance ? 1 : -1));

		// Limit responses
		const limit = n <= facilities.length ? n : facilities.length - 1;

		// Update datastore with new facilities
		await saveFacilities({ facilities });
		return facilities.slice(0, limit);
	}
};

module.exports = { matchFacilities };
