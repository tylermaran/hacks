const generateTerrain = (d) => {
	const terrain = [];
	for (let i = 0; i < d; i++) {
		const row = [];
		for (let j = 0; j < d; j++) {
			const rock = Math.floor(Math.random() * 100);
			if (rock > 95) {
				row.push(1);
			} else {
				row.push(0);
			}
		}
		terrain.push(row);
	}
	return terrain;
};
const world = generateTerrain(100);

const charPos = [20, 50];

window.addEventListener('keydown', ({ key }) => {
	switch (key) {
		case 'ArrowLeft':
			charPos[0] -= 1;
			break;
		case 'ArrowRight':
			charPos[0] += 1;
			break;
		case 'ArrowUp':
			charPos[1] -= 1;
			break;
		case 'ArrowDown':
			charPos[1] += 1;
			break;
		default:
			break;
	}
});

const drawMap = () => {
	const matrix = world;
	matrix[charPos[1]][charPos[0]] = 8;
	const pixelMap = document.createElement('div');
	matrix.map((row) => {
		const htmlRow = document.createElement('div');
		htmlRow.className = 'row';
		row.map((cell) => {
			const pixel = document.createElement('div');
			pixel.className = 'pixel';
			if (cell === 1) {
				pixel.classList.add('wall');
			}
			if (cell === 8) {
				pixel.classList.add('char');
			}
			htmlRow.appendChild(pixel);
		});
		pixelMap.appendChild(htmlRow);
	});
	const map = document.getElementById('map');
	map.innerHTML = '';
	map.appendChild(pixelMap);
	window.requestAnimationFrame(drawMap);
};
window.requestAnimationFrame(drawMap);
