// Access through JS
let newButton = document.createElement("button");
newButton.innerText = "Project 1!";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
newButton.style.height  = "30px";
newButton.style.width  = "100px";


// insert the button at end of body tag
document.querySelector("body").append(newButton);