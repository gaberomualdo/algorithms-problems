/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const fetchNormalizedChar = (ix) => {
        const char = s[ix].toLowerCase();
        return alphabet.includes(char) ? char : " ";
    }
    let p1 = 0;
    let p2 = s.length - 1;
    while(p1 < p2) {
        const c1 = fetchNormalizedChar(p1);
        const c2 = fetchNormalizedChar(p2);
        if(c1 === " ") {
            p1++;
            continue;
        }
        if(c2 === " ") {
            p2--;
            continue;
        }
        if(c1 === c2) {
            p1++;
            p2--;
        } else {
            return false;
        }
    }
    return true;
};