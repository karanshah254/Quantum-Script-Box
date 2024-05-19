console.log("hello world!"); // prints  hello world!

console.log(__filename); // prints file location

console.log(__dirname); // prints folder location


setTimeout(() => {
    console.log("Prints for only 2 seconds");
}, 2000);


setInterval(() => {
    console.log("Prints every 3 seconds");
}, 3000);