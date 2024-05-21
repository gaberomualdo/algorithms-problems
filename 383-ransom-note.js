/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterTable = (str) => {
        const table = {};
        for(let i = 0; i < str.length; i++) {
            const c = str[i];
            if(table[c] === undefined) {
                table[c] = 1;
            } else {
                table[c]++;
            }
        }
        return table;
    }
    const noteTable = letterTable(ransomNote);
    const magazineTable = letterTable(magazine);
    for(const key of Object.keys(noteTable)) {
        if(magazineTable[key] === undefined) return false;
        if(magazineTable[key] < noteTable[key]) return false;
    }
    return true;
};