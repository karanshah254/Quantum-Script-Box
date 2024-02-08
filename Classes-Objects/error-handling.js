let a = 5;
let b = 10;
console.log(a + b); //15

// this block is code is tested and rest of code will run
try {
    console.log(a + c); // gives error
}
catch (error) {
    console.log(error);
}

console.log('done');