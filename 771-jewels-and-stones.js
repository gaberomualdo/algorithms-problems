/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsArr = jewels.split("");
    let x = 0;
    stones.split("").forEach((s) => {
        if(jewelsArr.includes(s)) x++;
    });
    return x;
};