// This file will compile the Lottery.sol contract.

const path = require('path');
const fs = require('fs');
const solc = require('solc');


const todoListPath = path.resolve(__dirname, 'contracts', 'TodoList.sol');
const source = fs.readFileSync(todoListPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':TodoList'];
