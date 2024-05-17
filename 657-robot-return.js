/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    for(const move of moves) {
        if(move === 'L') x -= 1;
        if(move === 'R') x += 1;
        if(move === 'U') y -= 1;
        if(move === 'D') y += 1;
    }
    return x === 0 && y === 0;
};