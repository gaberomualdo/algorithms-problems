/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    nums.forEach((elm, idx) => {
        if(idx === nums.indexOf(elm)) {
            k++;
        } else {
            nums[idx] = null;
        }
    });

    let pointer = 0;
    nums.forEach((elm, idx) => {
        if(elm !== null) {
            nums[pointer] = elm;
            pointer++;
        }
    });
    nums.forEach((elm, idx) => {
        if(idx >= k) {
            nums[idx] = null;
        }
    });
    return k;
};