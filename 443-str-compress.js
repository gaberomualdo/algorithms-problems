/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(chars.length <= 1) return chars.length;
    let res = "";
    
    let cur = chars[0];
    let freq = 1;

    const append = () => {
        if(freq === 1) {
            res += cur;
        } else {
            res += cur + freq.toString()
        }
    }

    for(let ix = 1; ix < chars.length; ix++) {
        const c = chars[ix];
        if(c === cur) {
            freq++;
        } else {
            append();
            cur = c;
            freq = 1;
        }
    }
    append();
    for(let i = 0; i < res.length; i++) {
        chars[i] = res[i];
    }
    return res.length;
};