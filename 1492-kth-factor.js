/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    if(n === 1) return k === 1 ? 1 : -1;
    let factors = 0;
    for(let i = 1; i <= Math.ceil(n / 2); i++) {
        if(n % i === 0) factors++;
        if(factors === k) return i; 
    }
    if(k - 1 === factors) return n;
    return -1;
};