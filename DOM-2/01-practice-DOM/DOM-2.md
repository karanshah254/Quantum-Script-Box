1. Create element & Insert element 
```js
    let newBtn = document.createElement("button");  button is created 
    newBtn.innerText = "Button-1"; // given innerText to it
    div.append(newBtn); // after div element inside 
    div.prepend(newBtn); // before div element inside
    div.after(newBtn); // after div element outside
    div.before(newBtn); // before div element outside
```

2. Delete element 
```js
    let para = document.querySelector("p");
    para.remove(); // removes p tag and its text
```

3. Select specific element & Get-Attribute & Set-Attribute
```js
    let div = document.querySelector("div"); 
    console.log(div); // selected div 

    let id = div.getAttribute("id");
    console.log(id); // gives value of id of div element

    let para = document.querySelector("p");
    console.log(para.setAttribute("class", "value-2"));
    // change from value-1 to value-2
```