/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let pointer = 0;
    let val = 0;
    let valReset = false;
    while(pointer < s.length) {
        if(s[pointer] === " ") {
            valReset = true;
        } else {
            if(valReset) {
                val = 1;
            } else {
                val++;
            }
            valReset = false;
        }
        pointer++;
    }
    return val;
};