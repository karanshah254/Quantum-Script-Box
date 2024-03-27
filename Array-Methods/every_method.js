let number = [1, 3, 5, 7];

let checkOdd = number.every((el) => {
    return el % 2 != 0;
});

console.log(checkOdd);