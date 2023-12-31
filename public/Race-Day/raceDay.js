let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = false;
let age = 20;
if (registerEarly === true && age > 18) {
    raceNumber += 100;
}
if (age > 18 && registerEarly === true) {
    console.log(`${raceNumber} will race at 9:30 am.`);
} else if (age > 18 && registerEarly === false) {
    console.log(`${raceNumber} will race at 11:00 am`);
} else if (age < 18) {
    console.log(`${raceNumber} will race at 12:30 am`);
} else if (age === 18) {
    console.log("registeration desk");
}
