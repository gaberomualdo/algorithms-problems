/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const sum = (arr) => arr.reduce((current, a) => current + a, 0);
    let res = undefined;
    for(customer of accounts) {
        const s = sum(customer);
        if(res === undefined || s > res) {
            res = s;
        }
    }
    return res;
};