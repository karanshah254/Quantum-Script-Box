1. Using var, let, & const variable
```js
    var number = 15;
    number = 20 // first number has value 15 now it has value 20

    let age = 18;
    age = 20; // first age has value 18 now it has value 20

    const myName = 'David';
    myName = 'Mona';   // gives type error as myName is declared as constant variable
```

2. Use of string interpolation method 
```js
    let myName = 'David'
    console.log(`Hello ${myName}`) // Output: Hello David
```

3. Use of object as non-primitive datatype
```js
    const student = {
        name : "David",
        age : 20,
        salary : "1000$",
    };
    console.log(student); // output is name, age & salary with values
    console.log(student.name); // output is David 
```

4. Conditional Statement i.e. use of if..else
```js
    let condition = true;
    if(condition) {
        console.log('condition is true'); 
        // this block executes if conditon is true 
    }
    else {
        console.log('condition is false');
        //  if above consdition returns false the this block is executed
    }
```

5. Use of ternary operator
```js
    let condtion = true ;
    condition ? console.log('true statement') : console.log('false statement');
```