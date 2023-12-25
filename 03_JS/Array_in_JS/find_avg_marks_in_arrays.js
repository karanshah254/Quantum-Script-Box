
let marks = [90, 96, 97, 94, 91, 95];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log('Sum is', sum);
let avgMarks = sum / marks.length;
console.log(`Average marks is ${avgMarks.toFixed(2)}.`);