let canvas = document.querySelector('.field');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
	let step = 50;
	let left = 0.5 - Math.ceil(canvas.width / step) * step;
	let top = 0.5 - Math.ceil(canvas.height / step) * step;
	let right = 2 * canvas.width;
	let bottom = 2 * canvas.height;
	ctx.clearRect(left, top, right - left, bottom - top);
	ctx.beginPath();
	for (let x = left; x < right; x += step) {
		ctx.moveTo(x, top);
		ctx.lineTo(x, bottom);
	}
	for (let y = top; y < bottom; y += step) {
		ctx.moveTo(left, y);
		ctx.lineTo(right, y);
	}
	ctx.strokeStyle = '#888';
	ctx.stroke();
}

// Mouse event handling:
let start;
const getPos = (e) => ({
	x: e.clientX - canvas.offsetLeft,
	y: e.clientY - canvas.offsetTop,
});

const reset = () => {
	start = null;
	ctx.setTransform(1, 0, 0, 1, 0, 0); // reset translation
	draw();
};

canvas.addEventListener('mousedown', (e) => {
	reset();
	start = getPos(e);
});

canvas.addEventListener('mouseup', reset);
canvas.addEventListener('mouseleave', reset);

canvas.addEventListener('mousemove', (e) => {
	// Only move the grid when we registered a mousedown event
	if (!start) return;
	let pos = getPos(e);
	// Move coordinate system in the same way as the cursor
	ctx.translate(pos.x - start.x, pos.y - start.y);
	draw();
	start = pos;
});

draw(); // on page load
