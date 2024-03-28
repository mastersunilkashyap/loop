const readline = require('readline-sync');

let m = readline.questionInt('Enter number m: ');
let n = readline.questionInt('Enter number n: ');

let i = m;
let sum = 0;

while (i <= n) {
    sum =sum+i
    i++;
}

console.log(sum);
