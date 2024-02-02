1. Mouse events : click, double click, etc.
```js
    let btn = document.querySelector('button');
    btn.onclick = () => {
        console.log('hello');
    }
    // when clicks on button icon it generates hello on console window
```
2. Keyboard events : keypresss, keyup, keydown.
3. Form events : submit, etc
4. Basic Syntax :-
```js
    node.event = () => {
        // run program
    }
```
5. Event Object
```js
    node.event = (evt) =>{
        console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX);
        console.log(evt.clientY);
    }
```
6. Event Listeners
```js
    const submit = () => {
        console.log("submited succesfully");
    }

    const submit1 = () => {
        console.log("already submitted");
    }
    btn.addEventListener('click', submit); // added submit()
    btn.addEventListener('click', submit1); // added submit1()
    btn.removeEventListener('click',submit); // removes submit()
```
7. Switch Theme JS-code: 
```js
    let mode = document.getElementById('mode');
    let currentMode = 'Light Mode';
    let body = document.querySelector('body');

    let switchTheme = () => {
        if (currentMode === 'Light Mode') {
            currentMode = 'Dark Mode';
            body.classList.add('dark');
            body.classList.remove('light');
        }
        else {
            currentMode = 'Light Mode';
            body.classList.add('light');
            body.classList.remove('dark');
        }
        console.log(currentMode);
    }
    mode.addEventListener('click', switchTheme);
```