let uniStudent = (student) => {
    // use of destructor
    let { name, branch, university } = student;
    console.log(`My name is ${name} studying in ${branch} from ${university}`);
}

uniStudent({
    name: "Karan Shah",
    branch: "Computer Engineering",
    university: "Gujarat Technological University"
});