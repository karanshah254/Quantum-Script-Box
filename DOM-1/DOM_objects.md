1. Selecting elemenst by ID
```js
<div id = "divId">text</div>
document.getElmentById("divId");
// access of div tag
```

2. Selecting elements by class name
```js
<div class = "divClass">text</div>
document.getElementByClassName("divClass"); 
// returns an array list of all the element with this class name
```

3. Selecting elements by tag name
```js
<div class = "name">text</div>
document.getElementsByTagName("div"); 
// return all div tags in document
```

4. Query Selector: Access us to use any CSS selector
```js
<div class = "name" id = "idName">text</div>
document.querySelectorAll("div"); // for all "div" tags
document.querySelectorAll("#idName"); // for all id = "idNane"
document.querySelectorAll(".name"); // for all class = ".name"
```

5. Manipulating Atrrbutes
```js
let img = document.querySelector('img');
img.getAttribute('id');
img.setAttrbute('id','newImg');
```

6. Manipulating Style
```js
let heading = document.querySelector('h1');
heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';
```

7. Adding elements with user choice
```js
let button = document.querySelector('button');
let para = document.querySelector('p');
p.insertAdjacentElement('beforebegin', button);
```