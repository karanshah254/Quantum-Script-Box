function sum(...args) {
    return args.reduce((curr, next) => {
        return curr + next;
    })
}

console.log(sum(1, 2, 3, 4));

function minimum(...args) {
    return args.reduce((min, res) => {
        if (min < res) {
            return min;
        } else {
            return res;
        }
    })
}
console.log(minimum(3, 4, 1, 0, -4));