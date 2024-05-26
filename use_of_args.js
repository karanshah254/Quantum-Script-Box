let args = process.argv;

for (let index = 2; index < args.length; index++) {
    console.log("hello", args[index]);
}