// Exports a list of blocks used by 2db
// Each block comes in the following JSON format:
//     {
//         wall: true,
//         name: 'grass'
//         style: styleObj,
//     }

const grass = require('./grass');

module.exports = [grass];
