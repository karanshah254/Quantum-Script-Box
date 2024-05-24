function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * 10) + 1;
            console.log(number);
            resolve();
        })
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}