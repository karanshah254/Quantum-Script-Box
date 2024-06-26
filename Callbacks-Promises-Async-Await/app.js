console.log("normal promise use with then and catch");

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
        console.log("promise is resolved");
    })
    .catch(() => {
        console.log("promise is rejected");
    })