let number = [2, 4, 1, 7, 10, 8];

let newSet = number.reduce((max, element) => {
    if (max < element) {
        return element;
    } else {
        return max;
    }
});

console.log(newSet);