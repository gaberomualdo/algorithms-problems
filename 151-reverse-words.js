/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(/\s+/g);
    const reversedWords = [];
    for(let i = words.length - 1; i >= 0; i--) {
        if(words[i] === '') continue;
        reversedWords.push(words[i]);
    }
    return reversedWords.join(" ");
};