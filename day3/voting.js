let reader = require ("readline-sync")
let age = reader.question("how old are you")
 if (age>=18){
     console.log("you are eligible");
 }
 else{
     console.log("you are not eligible");
 }