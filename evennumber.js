const readline = require('readline-sync');

let n = readline.questionInt('Enter number n: ');

let i = 1;
while(i <= n) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
