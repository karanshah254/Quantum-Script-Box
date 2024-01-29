let divs = document.querySelectorAll(".box");
let index = 1;
for (const div of divs) {
    div.innerText = `new value is ${index}`; // change to new value
    index++;
}