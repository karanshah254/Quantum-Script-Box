// use of arrow function =>

const checkNumber = (number) =>
{
    if(number === 10)
    {
        return 'Its 10';
    }
    else 
    {
        return 'Not 10';
    }
}

const answer = checkNumber(10);
console.log(answer);