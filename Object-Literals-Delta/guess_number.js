let userNumber = 5;
let computerNumber;
let max = 10;

// btw 1-10
computerNumber = Math.floor((Math.random() * max) + 1);
console.log("User selected number is", userNumber)
console.log("Computer generated number is", computerNumber);

// check if user matches comp number 
if (userNumber === computerNumber) {
    console.log('Congratulations!');
}
else {
    console.log("Better luck next time");
}