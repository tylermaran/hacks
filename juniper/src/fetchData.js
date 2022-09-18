const haversine = require('haversine');
const fetch = require('node-fetch');

const fetchData = async ({ latitude, longitude }) => {
	const response = await fetch(
		'https://data.cityofnewyork.us/resource/ymhw-9cz9.json'
	);
	const data = await response.json();

	// Filter out duplicate BINs
	const usedBins = [];

	// Filter response
	const filtered = data.reduce((acc, el) => {
		if (el.bin && !usedBins.includes(el.bin)) {
			// Return distance (in km) between (start, end)
			const distance = haversine(
				{ latitude, longitude },
				{
					latitude: parseFloat(el.location_1.latitude),
					longitude: parseFloat(el.location_1.longitude),
				}
			);

			acc.push({
				bin: el.bin,
				name: el.facility_name,
				latitude: el.location_1.latitude,
				longitude: el.location_1.longitude,
				distance,
			});
			usedBins.push(el.bin);
		}
		return acc;
	}, []);

	return filtered;
};

module.exports = { fetchData };
