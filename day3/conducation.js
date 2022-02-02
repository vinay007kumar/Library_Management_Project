'use strict';
function clock12(hour) {
    if (hour <= 12) {
        return "am"
    }
    else {
        return "pm"
    }
}
console.log("1->" + clock12(1));
console.log("23->" + clock12(23));
