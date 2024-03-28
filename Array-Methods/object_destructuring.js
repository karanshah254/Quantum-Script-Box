const person = {
    name: "Karan",
    age: 20,
    marks: 90
};

let { name, age, city = "Ahmedabad" } = person;
console.log(city);