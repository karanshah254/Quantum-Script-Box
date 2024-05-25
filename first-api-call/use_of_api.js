let url = "https://catfact.ninja/fact";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data1) => {
        console.log("data1 is ", data1.fact);
        return fetch(url);
    })
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        console.log("data2 is ", data2.fact);
    })
    .catch((err) => {
        console.log(err);
    });