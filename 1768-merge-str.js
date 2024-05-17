/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let r = "";
    const minLen = Math.min(word1.length, word2.length);
    for(let i = 0; i < minLen; i++) {
        r += word1[i] + word2[i];
    }
    if(word1.length > minLen) {
        r += word1.slice(minLen);
    }
    if(word2.length > minLen) {
        r += word2.slice(minLen);
    }
    return r;
};