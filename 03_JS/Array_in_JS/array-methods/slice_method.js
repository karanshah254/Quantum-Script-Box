let cars = ["maruti", "xuv", "toyota", "ferrari", "buggati"];

console.log("Copy of array", cars.slice()) // copies a portion of an array
console.log("Cars btw 1 to 3 are ", cars.slice(1, 4));  // returns elements from index 1 to 3
console.log("Last 2 cars are ", cars.slice(-2)); // returns last two elements of array