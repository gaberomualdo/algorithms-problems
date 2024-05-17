/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const getTable = (str) => {
        const table = {};
        for(let letter of str) {
            if(table[letter] === undefined) {
                table[letter] = 1;
            } else {
                table[letter]++;
            }
        }
        return table;
    }
    const tS = getTable(s);
    const tT = getTable(t);
    for(const letter of Object.keys(tT)) {
        if(tS[letter] === undefined) return letter;
        tS[letter] -= tT[letter];
    }
    for(const sLetter of Object.keys(tS)) {
        if(tS[sLetter] < 0) return sLetter;
    }
};