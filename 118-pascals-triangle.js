/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    res = [[1]];
    for(let i = 2; i < numRows + 1; i++) {
        res.push([]);
        const resIx = res.length - 1;
        const prev = res[resIx - 1];
        for(let c = 0; c < i; c++) {
            if(c === 0 || c === i - 1) {
                res[resIx].push(1);
            } else {
                res[resIx].push(prev[c - 1] + prev[c]);
            }
        }
    }
    return res;
};