// single threaded nature of JS

setTimeout(() => {
    console.log("hello");
}, 2000);

setTimeout(() => {
    console.log("world");
}, 2000);

console.log("done");