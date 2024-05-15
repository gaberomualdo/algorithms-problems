/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    const digits = n.toString().split("").map(e => parseInt(e));
    let maxDigit = -1;
    for(const digit of digits) {
        if(digit > maxDigit) maxDigit = digit;
    }
    return maxDigit;
};