const mylist = document.getElementById('list');
const input = document.getElementById('input_field');

function addItem() {
	// Create list element and add input text
	const item = document.createElement('li');
	item.innerText = input.value;

	// Create delete button
	const button = document.createElement('button');
	button.innerText = 'X';

	// Add the remove function
	// "this" refers to the button, and
	// "this.parentNode" refers to the li element
	button.onclick = function () {
		this.parentNode.remove();
	};

	// Append button to the list item
	item.appendChild(button);

	// Append items to myList
	mylist.appendChild(item);

	// Reset input field
	input.value = '';
}
