/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(const operation of operations) {
        x += operation.includes("+") ? 1 : -1;
    }
    return x;
};