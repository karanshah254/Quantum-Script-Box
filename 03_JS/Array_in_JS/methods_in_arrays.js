// push - add element 
let number = [1, 2, 3, 4, 5];
number.push(6, 7);
console.log(number);


// pop - deletes the element 
let fruit = ['apple', 'banana', 'watermelon'];
let removedFruit = fruit.pop();
console.log(fruit);
console.log('Removed fruit is', removedFruit);


// concat - add nultiple arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = array1.concat(array2);
console.log(result);


// unshift - add element in beginning
let integer = [1, 2, 3, 4];
integer.unshift(0);
console.log(integer);


// shift - deletes element from start
let array3 = ['Karan', 'Krish', 'Kavan'];
array3.shift();
console.log(array3);

// slice - pieces of element - slice(startIndex, endIndex) - doesn't include end index
let stringArray = ['I', 'love', 'coding', 'in', 'JS'];
console.log(stringArray.slice(1, 3));


// splice - change/add/delete elements - splice(startIndex,deleteIndex,newValue);
let numbers = [1, 2, 3, 4, 5];
// from index 1 till next index both the values are replaced by "9" and "8"
numbers.splice(1, 2, 9, 8);
console.log(numbers); // output = [ 1, 9, 8, 4, 5 ]
