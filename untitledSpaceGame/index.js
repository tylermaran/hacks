import blessed from 'blessed';

// Create a screen object.
const screen = blessed.screen({
	smartCSR: true,
	fullUnicode: true,
});

// Create a box perfectly centered horizontally and vertically.
const box = blessed.box({
	top: 'center',
	left: 'center',
	width: '80%',
	height: '80%',
	content: '',
	tags: true,
	border: {
		type: 'line',
	},
	style: {
		fg: 'white',
		bg: 'black',
		border: {
			fg: '#f0f0f0',
		},
	},
});

// Append our box to the screen.
screen.append(box);

// Add a text input field at the bottom of the screen.
const input = blessed.textbox({
	bottom: 0,
	height: 1,
	inputOnFocus: true,
	padding: {
		left: 1,
		right: 1,
	},
	style: {
		fg: '#787878',
		bg: '#454545',
	},
});

screen.append(input);

// Set the focus on the input field.
input.focus();

// Render the screen.
screen.render();

// Handle user input.
input.on('submit', (value) => {
	if (value === 'exit') {
		process.exit(0);
	}

	// Here you can add different command handlers.
	// For example:
	if (value === 'home') {
		box.setContent('Welcome to the home page!');
	} else if (value === 'page1') {
		box.setContent('Welcome to Page 1!');
	} else if (value === 'page2') {
		box.setContent('Welcome to Page 2!');
	} else {
		box.setContent(`Unknown command: ${value}`);
	}

	screen.render();
	input.clearValue();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
	return process.exit(0);
});

// Render the screen.
screen.render();
