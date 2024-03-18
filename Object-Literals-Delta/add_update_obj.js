const student = {
    name: "john",
    age: 30,
    city: "new jersey",
    marks: 20
};

console.log(student); // original
student.city = "Hamilton"; // change 
student.gender = "male"; // added 
delete student.marks; // remove
console.log(student); // changed