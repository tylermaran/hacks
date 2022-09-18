const fs = require('fs').promises;
const facilities = require('./data.json');

const getFacilities = async () => {
	return facilities;
};

const saveFacilities = async ({ facilities }) => {
	const data = JSON.stringify({
		lastModified: new Date(),
		facilities,
	});
	await fs.writeFile(__dirname + '/data.json', data);
};

module.exports = { getFacilities, saveFacilities };
