/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const values = [1, 5, 10, 50, 100, 500, 1000];
    let result = 0;
    let pointer = 0;
    while(pointer < s.length) {
        const index = symbols.indexOf(s[pointer]);
        const symbol = symbols[index];
        const value = values[index];
        if(pointer + 1 < s.length) {
            const nextSymbolIndex = symbols.indexOf(s[pointer + 1]);
            const nextValue = values[nextSymbolIndex];
            if(nextSymbolIndex > index && nextSymbolIndex - index <= 2) {
                result += nextValue - value;
                pointer += 2;
                continue;
            }
        }
        result += value;
        pointer++;
    };
    return result;
};