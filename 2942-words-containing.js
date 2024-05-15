/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const res = [];
    words.forEach((word, ix) => {
        if(word.includes(x)) res.push(ix); 
    })
    return res;
};