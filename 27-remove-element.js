/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    nums.forEach((elm, idx) => {
        if(elm === val) {
            nums[idx] = null;
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