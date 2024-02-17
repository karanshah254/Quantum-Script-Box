1. SetTimeout -> set time in miliseconds & type of asynchronous programming.
```js
    setTimeout(() => {
    console.log('hello');
    }, 5000);
```

2. Get data at particular instant one after another or Callback Hell problem
```js
    function getData(dataId, nextData) {
        setTimeout(() => {
            console.log("Data is", dataId);
            if (nextData) {
                getData(2);
            }
        }, 5000);
    }
    // callback hell
    getData(1, () => {
        getData(2);
    });
```

3. Promises - solution to callback hell
```js
    let promise = new Promise((resolve, reject) => {
        console.log('Promise in JS');
        resolve('success'); // promise fulfilled 
        // reject(); gives error
    });
```