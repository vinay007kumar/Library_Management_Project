const number = [1,2,3,4,5,6]
const even = number.filter(iseven);
function iseven(value){
    return value%2 ===0;
}
console.log(even);