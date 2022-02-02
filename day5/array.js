let months = ['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
function getmonth(index){
    return months[index-1]
}
console.log(`month 1 : is ${getmonth(1)}\n month 2: is  ${getmonth(2)} \n month 8: is ${getmonth(8)} \n month 5: is  ${getmonth(5)} \n  month 12: is ${getmonth(12)}`)