let button = document.querySelector("button");

button.addEventListener("click", async () => {
    let fact = await getFact();
    console.log(fact);
    let para = document.querySelector("#result");
    para.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    } catch (e) {
        console.log(e);
        return "No fact found";
    }
}