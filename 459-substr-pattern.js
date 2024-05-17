/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i = 1; i <= Math.floor(s.length / 2); i++) {
        if(s.length % i !== 0) continue;
        let repeated = true;
        for(let c = 0; c < s.length; c++) {
            if(s[c] !== s[c % i]) {
                repeated = false;
                break;
            }
        }
        if(repeated) return true;
    }
    return false;
};