// basic todo has :
// 1. list - to show all todo
// 2. add - to add a new todo
// 3. delete - to remove a todo
// 4. quit  - to exit the todo

let todo = [];

let req = prompt("Enter choice : ");

while (true) {
    if (req == 'quit') {
        console.log("quiting app");
        break;
    }

    if (req == 'list') {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");
    }
    else if (req == "add") {
        let task = prompt("Enter task to be added ");
        todo.push(task);
        console.log("task added");
    }
    else if (req == 'delete') {
        let idx = prompt("Enter index at which task needs to be deleted: ")
        todo.splice(idx, 1);
    }
    else {
        console.log("wrong request");
    }

    req = prompt("Enter choice again : ");
}


