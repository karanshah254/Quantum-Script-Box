// created variable of human age
let myAge = 22;

// early years
let earlyYears = 2;
earlyYears *= 10.5;

// later years
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
let myName = "Karan".toLowerCase();

console.log(
    `My Name is ${myName}. i am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
