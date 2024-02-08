1. Setting prototype in JS
```js
    const employee = {
        calTax() {
            console.log('Tax is 10%');
        },
    };
    const fullName = {
        salary: 100000,
        calTax() {
            console.log('Tax is 20%'); // now 20% will be shown
        },
    };

    fullName.__proto__ = employee;
    // fullName has employee as its __proto__ (parent) object
```

2. Create class and built object
```js
    // create a class
    class toyotoCar {
        start() {
            console.log('start');
        }
        stop() {
            console.log('stop');
        }
    }
    // object using class
    let fortuner = new toyotoCar(); 
```

3. Constructor function
```js
    class toyotoCar {
        constructor(brand) {
            console.log('constructor');
            this.brand = brand;
        }
    }
    // If constructor is not created than 'new' keyword automatically builts it
    let fortuner = new toyotoCar("fortuner legender"); // object using class
    console.log(fortuner);
```

4. Inheritance in classes
```js
    class Parent {
        upbringing() {
            console.log('we treat our chidl');
        }
    }

    class Child extends Parent {
        study() {
            console.log('study hard');
        }
    }
    let object = new Child();
    // both child and parent has same method the child's method will be used.
    // This is called method overriding
```

5. Use of super keyword
- >It is used to call constructor of parent class to access method & properties.
```js
    class Parent {
        constructor() {
            this.type = 'humans';
        }
        hello() {
            console.log('hello from parent');
        }
    }

    class Child extends Parent {
        constructor(branch) {
            super(); // to invoke the constructor of the parent class
            this.branch = branch;
        }
        study() {
            console.log('study hard');
        }
    }
    let childObj = new Child('computer engineer'); 
    /* 
    The sequence is :
    1. Enter child constructor.
    2. Enter parent constructor.
    3. Exit child constructor.
    */
```