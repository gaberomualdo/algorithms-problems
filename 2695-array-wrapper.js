const sum = (arr) => arr.reduce((current, a) => current + a, 0);

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return sum(this.nums);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(",")}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */