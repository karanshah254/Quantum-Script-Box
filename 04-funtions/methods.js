// func inside object
const calculator = {
    addition: function (a, b) {
        return a + b;
    },
    subtraction: function (a, b) {
        return a - b;
    },
    multiplication: function (a, b) {
        return a * b;
    },
    division: function (a, b) {
        return a / b;
    }
};

console.log("Addition of a and b is", calculator.addition(12, 3));
console.log("Subtraction of a and b is", calculator.subtraction(12, 3));
console.log("Multiplication of aand b is", calculator.multiplication(12, 3));
console.log("Division of a and b is", calculator.division(12, 3));