let array = [1, 2, 3, 4, 5];

const sum = array.reduce((result, current) => {
    return result + current;
})

console.log(sum);