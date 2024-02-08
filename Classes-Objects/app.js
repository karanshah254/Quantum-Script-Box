// Q-1 Create user class with name and email adn view its data for 2 students
// Q-2 Create admin which inherits user & add related methods

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    view() {
        console.log('data is stored');
    }
}

class admin extends user {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log('you can edit data');
    }
}

let student1 = new user("John Doe", "john@gmail.com");
let student2 = new user("Karan Shah", "abc@gmail.com");
let teacher1 = new user('Ram Sir', 'ram@email.com');
let admin1 = new admin('admin','admin@college.com');