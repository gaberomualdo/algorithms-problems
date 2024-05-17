/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length <= 2) return true;
    const increasing = nums[0] < nums[nums.length - 1];
    for(let i = 0; i < nums.length - 1; i++) {
        if(increasing && nums[i + 1] < nums[i]) return false;
        if(!increasing && nums[i + 1] > nums[i]) return false;
    }
    return true;
};