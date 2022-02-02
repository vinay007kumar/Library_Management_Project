'use strict';

const readline = require('readline-sync'); /*user given in no.*/
let num = readline.questionInt("enter the number: ")
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}