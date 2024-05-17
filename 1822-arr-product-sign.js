/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let sign = 1;
    for(const num of nums) {
        if(num < 0) {
            sign *= -1;
        } else if (num > 0) {
            sign *= 1;
        } else {
            return 0;
        }
    }
    return sign;
};