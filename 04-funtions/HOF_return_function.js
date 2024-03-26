// even odd test bby returning function
function oddEvenTest(request) {
    if (request == 'odd') {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == 'even') {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log('wrong request');
    }
}
let request = 'even';
let test = oddEvenTest(request);
test(4);
test(3);