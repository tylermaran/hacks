// Hexagon is bestagon
// All planets are made up of hexagons
// Some have more. Some have less.

const climates = {
	ice: '#8be0ff',
	grass: '#6c6',
	mountain: '#969696',
	water: '#0718ff',
};

function generatePlanet(size) {
	const fields = [];
	const dist = {
		water: 0.5,
		grass: 0.75,
		mountain: 0.95,
		ice: 1,
	};

	for (let i = 0; i < size; i++) {
		// Set climate distribution

		let seed = Math.random();
		let climate;

		if (i < size * 0.2 || i > size * 0.8) {
			seed += 0.75;
		}

		if (seed >= 0 && seed <= dist.water) {
			climate = 'water';
		} else if (seed > dist.water && seed <= dist.grass) {
			climate = 'grass';
		} else if (seed > dist.grass && seed <= dist.mountain) {
			climate = 'mountain';
		} else {
			climate = 'ice';
		}

		fields.push({
			id: i,
			climate,
		});
	}
	return fields;
}

const planet = generatePlanet(70);

const grid = document.getElementById('grid');
const selected = document.getElementById('selected');

// Build grid
const interval = 7;
let rowNumber = 0;

const rows = planet.reduce((acc, el, i) => {
	if (i % interval === 0) {
		const row = document.createElement('div');
		row.classList.add('row');
		acc.push(row);
	}
	return acc;
}, []);

planet.forEach((el, i) => {
	const hex = document.createElement('div');
	hex.classList.add('hex');
	hex.setAttribute('id', el.id);
	hex.addEventListener('click', () => setSelected(el.id));

	switch (el.climate) {
		case 'grass':
			hex.classList.add('grass');
			break;
		case 'water':
			hex.classList.add('water');
			break;
		case 'mountain':
			hex.classList.add('mountain');
			break;
		case 'ice':
			hex.classList.add('ice');
			break;
		default:
			break;
	}

	if (i > 0 && i % interval === 0) rowNumber++;
	if (rowNumber % 2 === 0) {
		rows[rowNumber].classList.add('shift');
	}
	rows[rowNumber].append(hex);
});

rows.forEach((el) => {
	grid.append(el);
});

// Handle click for tiles
function setSelected(i) {
	const element = planet.reduce((acc, el) => {
		if (el.id === i) acc = el;
		return acc;
	}, {});

	const tileNumber = document.createElement('p');
	tileNumber.innerHTML = `Tile: ${element.id}`;

	const climateType = document.createElement('p');
	climateType.innerHTML = `Climate: ${element.climate}`;

	selected.innerHTML = '';
	selected.append(tileNumber, climateType);
}
