/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length === 0) return (x) => x;
    return function(x) {
        let n = x;
        for(let i = functions.length - 1; i >= 0; i--) {
            n = functions[i](n);
        }
        return n;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */