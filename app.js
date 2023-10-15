// OUtputs text to terminal
console.log("hello user, please give your name:");

// imports the 'readline' library into this module, and configure
const readlineAPI = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// this ask user to give the input and output what was given
readlineAPI.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readlineAPI.close();
});