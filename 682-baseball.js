/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scores = [];
    for(const operation of operations) {
        if(!isNaN(parseInt(operation))) {
            scores.push(parseInt(operation));
        }
        if(operation === '+') {
            const prev = scores.slice(scores.length - 2);
            if(prev.length === 0) scores.push(0);
            if(prev.length === 1) scores.push(prev[0]);
            if(prev.length >= 2) scores.push(prev[0] + prev[1]);
        } else if (operation === 'D') {
            scores.push(scores[scores.length - 1] * 2);
        } else if (operation === 'C') {
            scores.pop();
        }
    }
    let s = 0;
    for(score of scores) {
        s += score;
    }
    return s;
};