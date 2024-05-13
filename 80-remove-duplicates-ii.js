/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    nums.forEach((elm, idx) => {
        if(idx - 2 >= 0 && nums[idx - 2] === elm) {
            nums[idx - 2] = null;
        } else {
            k++;
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