let url ="https://catfact.ninja/fact";

async function getFact() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.fact);
}