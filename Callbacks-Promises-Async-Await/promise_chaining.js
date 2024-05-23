console.log("use of promise chaining");

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data saved"); // prmoise fullfilled
        } else {
            reject("data not saved due to weak connection"); // promise rejected
        }
    });
}

// use of then and catch for promises
saveToDb("apna college")
    .then(() => {
        console.log("promise is resolved, data1 saved");
        return saveToDb("hello world");
    })
    .then(() => {
        console.log("promise is resolved, data2 saved");
        return saveToDb("karan shah");
    })
    .then(() => {
        console.log("promise is resolved, data3 saved");
    })
    .catch(() => {
        console.log("promise is rejected");
    })