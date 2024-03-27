const student = {
    name: "Karan",
    age: 20,
    marks: 90
};
console.log("Before:", student);
const data = { ...student, gender: "male" };
console.log("After:", data);