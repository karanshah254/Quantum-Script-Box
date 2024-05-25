let url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let result = await axios.get(url, config);
        console.log(result.data);
    }
    catch (err) {
        console.log(err);
    }
}