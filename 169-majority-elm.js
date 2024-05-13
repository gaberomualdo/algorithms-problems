/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const frequencyTable = {};
    for(const num of nums) {
        if(frequencyTable[num] !== undefined) {
            frequencyTable[num]++;
        } else {
            frequencyTable[num] = 1;
        }
    }
    let maxFrequency = -1;
    let maxFrequencyNum = -1;
    for(const num of Object.keys(frequencyTable)) {
        if(frequencyTable[num] > maxFrequency) {
            maxFrequency = frequencyTable[num];
            maxFrequencyNum = num;
        }
    }
    return maxFrequencyNum;
};