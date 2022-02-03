 const number = [1,2,3,4,5];
 const numberD = number.map(double)
 function double(value, index,arr){
     return value*2
 }
 console.log(numberD);