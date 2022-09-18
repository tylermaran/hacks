console.log('connected');

const gary = document.getElementById('gary');
const clientWidth = window.innerWidth;
let x = 200;
let y = 50;

window.addEventListener('keydown', (e) => handleKeyDown(e));
window.addEventListener('keyup', (e) => handleKeyUp(e));

let down = false;
let up = false;
let right = false;
let left = false;
let jumping = false;
let jumpTimeout = false;

function handleKeyDown({ key }) {
	switch (key) {
		case 'ArrowUp':
			up = true;
			break;
		case 'ArrowDown':
			down = true;
			break;
		case 'ArrowLeft':
			left = true;
			break;
		case 'ArrowRight':
			right = true;
			break;
	}
}
function handleKeyUp({ key }) {
	switch (key) {
		case 'ArrowUp':
			up = false;
			break;
		case 'ArrowDown':
			down = false;
			break;
		case 'ArrowLeft':
			left = false;
			break;
		case 'ArrowRight':
			right = false;
			break;
	}
}

async function handleJump() {
	if (!jumping && !jumpTimeout) {
		jumpTimeout = true;
		jumping = true;
		y -= 150;
		await timeout(200);
		jumpTimeout = false;
		await timeout(300);
		jumping = false;
	}
}

function gameLoop() {
	if (x <= -10) {
		x += 30;
	}
	if (x >= clientWidth) {
		x -= 30;
	}

	if (y <= 500 && !jumpTimeout) {
		y += 15;
	}
	if (down) {
		y += 10;
	}
	if (up && !jumping) {
		handleJump();
	}
	if (right) {
		x += 10;
	}
	if (left) {
		x -= 10;
	}
	gary.style.top = y + 'px';
	gary.style.left = x + 'px';
}

function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

setInterval(gameLoop, 20);
