/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    let s = 0;
    for(let i = 0; i < n; i++) {
        s += mat[i][i];
    }
    for(let k = n - 1; k >= 0; k--) {
        s += mat[k][(n - 1) - k];
    }
    if(n % 2 === 1) {
        s -= mat[(n - 1) / 2][(n - 1) / 2];
    }
    return s;
};