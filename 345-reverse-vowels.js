String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiou";
    const ixArr = [];
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i].toLowerCase())) ixArr.push(i);
    }
    console.log(ixArr);
    for(let x = 0; x < Math.ceil(ixArr.length / 2); x++) {
        const leftIx = ixArr[x];
        const rightIx = ixArr[ixArr.length - 1 - x];
        const left = s[leftIx];
        const right = s[rightIx];
        console.log(leftIx, rightIx, left, right);
        s = s.replaceAt(leftIx, right);
        s = s.replaceAt(rightIx, left);
    }
    return s;
};