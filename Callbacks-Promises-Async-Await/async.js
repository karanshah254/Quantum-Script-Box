// return promise using async keyword
async function greet() {
    // throw "404 page not found";
    return "hello world";
}

greet().then(() => {
    console.log("promise was resolved");
})
.catch(() => {
    console.log("promise was rejected");
});