/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    const resolve = (upToDigit) => {
        if(digits[upToDigit] === 10) {
            digits[upToDigit] = 0;
            if(upToDigit === 0) {
                digits = [1, ...digits];
                return;
            } else {
                digits[upToDigit - 1] += 1;
                resolve(upToDigit - 1);
            }
        }
    }
    resolve(digits.length - 1);
    return digits;
};