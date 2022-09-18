class User {
	constructor(address) {
		this.address = address;
		this.peers = [];
		this.data = [];
	}
}

const addresses = [321, 432, 678, 364];

const users = addresses.map((address) => {
	return new User(address);
});

const connect = (n) => {
	for (let i = 0; i < n; i++) {
		let p1 = Math.floor(Math.random() * users.length);
		let p2 = Math.floor(Math.random() * users.length);
		if (p1 === p2 && p2 > 0) {
			p2--;
		}
		if (p1 === 0 && p2 === 0) {
			p2++;
		}
		users[p1].peers.push(users[p2].address);
		users[p2].peers.push(users[p1].address);
	}
};

connect(10);

console.log(users);
let container = document.getElementById('p2p'),
	canvas = document.createElement('canvas'),
	context = canvas.getContext('2d');

// round pixelRatio, because older devices have a pixelRatio of 1.5. Treat them as @2x devices
let pixelRatio = Math.round(window.devicePixelRatio) || 1;

container.appendChild(canvas);

// we're working with all available pixels, i. e. 750x1334 on an iPhone 7
let width = 375 * pixelRatio;
let height = 667 * pixelRatio;

// here's the magic: the actual canvas has the same pixels as the device (iPhone 7 in this case)
canvas.width = width;
canvas.height = height;
// however, the canvas dimensions are set to the pixels we're working with in the browser.
canvas.style.width = Math.round(width / pixelRatio) + 'px';
canvas.style.height = Math.round(height / pixelRatio) + 'px';
// also, the container should have the same size as the canvas
container.style.width = canvas.style.width;
container.style.height = canvas.style.height;

// now let's draw stuff
context.clearRect(0, 0, width, height);
context.save();

let x1 = 10,
	y1 = 10,
	x2 = width - 10,
	y2 = 10;

// an actual 1px hairline
context.lineWidth = 1;
context.strokeStyle = '#444';

// place the path
// Important: always offset by half a pixel to make lines super crisp
context.beginPath();
context.moveTo(x1 + 0.5, y1 + 0.5);
context.lineTo(x2 + 0.5, y2 + 0.5);
context.closePath();

context.stroke();

// context.restore();
