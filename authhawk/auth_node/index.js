const fs = require('fs').promises;
const open = require('open');

switch (process.argv[2]) {
	case 'init':
		ssoAuthentication();
	case 'generate':
		generate();
	case '--help':
		console.log('\nAuthHawk - secure secret management\n');
		console.log('Usage: authhawk [OPTION]\n');
		console.log('g, generate      Create and populate local .env file.');
		console.log('i, init          Initialize application.');
		console.log('--help           Display a list of available commands.');
		break;
	default:
		console.log('Not a valid argument.');
		console.log('Type msgen --help for a list of valid commands.');
		break;
}

async function ssoAuthentication() {
	// https://hasinthaindrajee.medium.com/browser-sso-for-cli-applications-b0be743fa656
	await open('https://fairsquaremedicare.com/login');
}

async function generate(generateEnv) {
	// Fetch env vars from server
	const dummyEnv = {
		USERNAME: 'tyleriscool',
		API_KEY: '12345asbcde',
		DB_USER: 'hannahmontana', 
		DB_HOST: 'localhost:4000',
		DB_PORT: '5432',
		DB_PASSWORD: 'secure124345',
	};

	// Set keys into process.env
	process.env = { ...process.env, ...dummyEnv };
	console.log(process.env);

	// Create local env file
	if (generateEnv) {
		const envString = Object.keys(dummyEnv).reduce((acc, key) => {
			return (acc += `${key}=${dummyEnv[key]}\n`);
		}, '');
		fs.writeFile('./.env', envString);
	}
}
