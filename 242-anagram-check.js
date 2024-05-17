/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
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
        if(tS[letter] === undefined) return false;
        if(tS[letter] !== tT[letter]) return false;
    }
    for(const sLetter of Object.keys(tS)) {
        if(tT[sLetter] === undefined) return false;
        if(tS[sLetter] !== tT[sLetter]) return false;
    }
    return true;
};