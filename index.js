const getLineIntersection = (a, b) => {
	const x1 = a[0].x;
	const x2 = a[1].x;
	const x3 = b[0].x;
	const x4 = b[1].x;

	const y1 = a[0].y;
	const y2 = a[1].y;
	const y3 = b[0].y;
	const y4 = b[1].y;

	const xInterval1 = [min(x1, x2), max(x1, x2)];
	const xInterval2 = [min(x3, x4), max(x3, x4)];
};

segment1 = [
	{ x: -10, y: 0 },
	{ x: 10, y: 0 },
];

segment2 = [
	{ x: 0, y: -10 },
	{ x: 0, y: 10 },
];

// getLineIntersection(segment1, segment2);

const data = {
	0: {
		id: 1912,
		title: 'Books',
	},
	1: {
		id: 1958,
		title: 'Brands',
	},
	2: {
		id: 2037,
		title: 'Logo',
	},
	3: {
		id: 2038,
		title: 'Colour',
	},
};

const updatedData = { id: 1912, title: 'The Books' };

Object.keys(data).forEach((el) => {
	if (data[el].id === updatedData.id) {
		data[el] = updatedData;
	}
});

// console.log(data);
var i = 0;
var array = [];
while (i < 1000) {
	array.push(`if(x === ${i}) return ${Math.floor(Math.pow(i, 0.5))};`);
	i++;
}

const sequenceLength = 3;
const logFile = `
	1 /home
	2 /home
	1 /shop
	3 /home
	1 /checkout
	3 /shop
	2 /settings
	3 /checkout
	2 /shop
	2 /checkout
`;
function findMostCommonNPathSequence(logFile, sequenceLength) {
	const array = logFile.replace(/[0-9]|\s|\n|\t/g, '').split('/');
	const res = { list: [], details: [] };
	for (let i = 0; i < array.length; i++) {
		if (array[i] === '') continue;
		const index = res.list.indexOf(array[i]);
		if (index !== -1) {
			res.details[index].count++;
		} else {
			res.list.push(array[i]);
			res.details.push({ name: array[i], count: 1 });
		}
	}
	return res.details
		.sort((a, b) => b.count - a.count)
		.map((el) => el.name)
		.slice(0, sequenceLength);
}

console.log(findMostCommonNPathSequence(logFile, 3));
