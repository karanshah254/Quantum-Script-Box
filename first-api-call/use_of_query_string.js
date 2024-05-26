let url = "http://universities.hipolabs.com/search?name=";

let place = "india";

async function getColleges() {
    try {
        let result = await axios.get(url + place);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}