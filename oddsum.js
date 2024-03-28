const readline = require('readline-sync');

let n = readline.questionInt('Enter number n: ');

let i = 1;sum=0;
while(i <= n) {
    if (i % 2 === 1) {
        sum =sum+i
    }
    
    i++;
}
console.log(sum);