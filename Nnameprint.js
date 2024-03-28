const readline = require('readline-sync');

let n = readline.questionInt('Enter number n: ');
let name = readline.question('Enter the name: ');

let i = 0; 

while (i < n) { 
    console.log(name); 
    i++;
}