/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0;
    if(target > nums[nums.length - 1]) return nums.length;
    const search = (left, right) => {
        const splitIx = Math.floor((right - left) / 2) + left;
        const split = nums[splitIx];
        console.log(left, right, split);
        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        if(split === target) return splitIx;
        if(right - left === 1 && nums[left] < target && nums[right] > target) return right;
        if(target >= split) {
            left = splitIx;
        } else {
            right = splitIx;
        }
        return search(left, right);
    }
    return search(0, nums.length - 1);
};