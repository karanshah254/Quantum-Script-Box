let array = [1, 2, 3, 4];

let newArray = array.reduce((curr, next) => {
    return curr + next;
});

console.log(newArray);