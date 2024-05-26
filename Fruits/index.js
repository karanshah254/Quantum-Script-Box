// entry point for all files to export anywhere

let apple = require("./apple");
let mango = require("./mango");
let orange = require("./orange");

let fruits = [apple, mango, orange];

module.exports = fruits;