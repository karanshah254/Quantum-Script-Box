
function area(width, height) {
    if (width < 0 || height < 0) {
        console.log('Invalid');
    }
    return width * height;
}

const answer = area(5, 8);
console.log(answer);