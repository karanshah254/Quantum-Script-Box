function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}

let greet = function () {
    console.log("hello");
}

multipleGreet(greet, 4); // higher order functions: function having function as an argument
