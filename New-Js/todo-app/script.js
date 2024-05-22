let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete this task";
    deleteBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(deleteBtn);
    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == 'BUTTON') {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("button deleted");
    }
})