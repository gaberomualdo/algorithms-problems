/**
 * @param {string} digits
 * @return {string[]}
 */
let alphabet = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    
    const digit = parseInt(digits[0]);
    const letters = alphabet[digit].split("");
    if(digits.length === 1) {
        if(digit === 1) return [];
        return letters;
    } else {
        const result = [];
        for(const letter of letters) {
            result.push(...letterCombinations(digits.slice(1)).map(e => letter + e));
        }
        return result;
    }
};
