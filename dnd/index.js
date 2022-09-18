console.log('Connected');

const tiles = [
	{
		border: 'green',
		fill: '#42A218',
		x: 100,
		y: 100,
	},
	{
		border: 'green',
		fill: '#42A218',
		x: 100,
		y: 210,
	},
	{
		border: 'green',
		fill: '#42A218',
		x: 100,
		y: 320,
	},
];

let tileColor = 'green';

const setTileColor = (color) => {
	tileColor = color;
};

function handleZoom() {
	boxSize *= 1.1;
	mapSize *= 1.1;
}

//get the canvas, canvas context, and dpi
const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');
const dpi = window.devicePixelRatio;

// get canvas width
const width = getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
let boxSize = 25;
let mapSize = width;
console.log(width);

const boxes = Math.floor(mapSize / boxSize);

let mousedown = false;
canvas.addEventListener('mousedown', handleMousedown);
canvas.addEventListener('mouseup', handleMousedown);
canvas.addEventListener('mousemove', handleClick);

function handleMousedown(e) {
	mousedown = !mousedown;
}

function handleClick(e) {
	if (mousedown) {
		ctx.fillStyle = tileColor;
		ctx.strokeStyle = 'darkgrey';
		console.log(e.offsetX);

		const x = Math.floor(e.offsetX / boxSize) * boxSize;
		const y = Math.floor(e.offsetY / boxSize) * boxSize;

		ctx.fillRect(x, y, boxSize, boxSize);
		ctx.strokeRect(x, y, boxSize, boxSize);
	}
}

const drawGrid = () => {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#d3d3d3';
	for (let row = 0; row < boxes; row++) {
		for (let column = 0; column < boxes; column++) {
			const x = column * boxSize;
			const y = row * boxSize;
			ctx.rect(x, y, boxSize, boxSize);
			ctx.fill();
			ctx.stroke();
		}
	}
	ctx.closePath();
};

function fix_dpi() {
	//create a style object that returns width and height
	let style = {
		height() {
			return +getComputedStyle(canvas)
				.getPropertyValue('height')
				.slice(0, -2);
		},
		width() {
			return +getComputedStyle(canvas)
				.getPropertyValue('width')
				.slice(0, -2);
		},
	};
	//set the correct attributes for a crystal clear image!
	canvas.setAttribute('width', style.width() * dpi);
	canvas.setAttribute('height', style.height() * dpi);
}

const drawMap = () => {
	fix_dpi();
	drawGrid();
	// requestAnimationFrame(drawMap);
};
// drawMap();
requestAnimationFrame(drawMap);

// draw map and grid
// draw tiles from db (only on first load)
// onclick - add tile to array, and update on map (don't re-render)
// on update / refresh, rerender everything

// pan and zoom
// https://codepen.io/chengarda/pen/wRxoyB

// click and drag 'infinite' grid
// https://stackoverflow.com/questions/66736000/how-can-i-make-infinite-grid-with-canvas
// weird grid effect for me
