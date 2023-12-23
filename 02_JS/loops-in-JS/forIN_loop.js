// mainly used for objects

let student = {
  name: "David",
  age: 20,
  gender: "male",
};

for (let key in student) {
  console.log("key =", key, "&", "value =", student[key]);
}
