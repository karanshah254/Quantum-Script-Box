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