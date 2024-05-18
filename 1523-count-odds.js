/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    return (Math.floor((high % 2 === 1 ? high : high - 1) - (low % 2 === 1 ? low : low + 1)) / 2) + 1;
};