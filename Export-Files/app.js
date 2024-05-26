// console.log("This is app.js file");

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const product = (a, b) => a * b;

let object = {
    sum: sum,
    diff: diff,
    product: product
};

module.exports = object;