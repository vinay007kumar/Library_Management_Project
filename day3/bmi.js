'use strict';
function bmicategory(bmi) {
    if (bmi < 18.5) {
        //return "underwaight";
        console.log("underwaight")
    }
    else if(bmi < 25) {
        //return "overwaight";
        console.log("normalwaight")
    }
    else if(bmi < 35) {
        //return "overwaight";
        console.log("overwaight")
     }
     else{
         console.log("obesity")
     }
   
}
bmicategory(10);
bmicategory(24);
bmicategory(35);