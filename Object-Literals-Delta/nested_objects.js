const classInfo = {
    karan: {
        marks: 99,
        age: 20
    },

    kavan: {
        marks: 85,
        age: 15
    },

    krish: {
        marks: 80,
        age: 20
    }
};

console.log(classInfo); // whole obj
console.log("Karan's data", classInfo.karan); // nested obj
console.log("Karan's age is ", classInfo.karan.age); // specific key