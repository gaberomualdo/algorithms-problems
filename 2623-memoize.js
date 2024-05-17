/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const twoDimMemoTable = {};
    const oneDimMemoTable = {};
    return function(...args) {
        let res;
        if(args.length === 2) {
            if(twoDimMemoTable[args[0]] === undefined) twoDimMemoTable[args[0]] = {};
            if(twoDimMemoTable[args[0]][args[1]] !== undefined) {
                res = twoDimMemoTable[args[0]][args[1]]
            } else {
                res = fn(...args);
            }
            twoDimMemoTable[args[0]][args[1]] = res;
        } else if (args.length === 1) {
            if(oneDimMemoTable[args[0]] !== undefined) {
                res = oneDimMemoTable[args[0]]
            } else {
                res = fn(...args);
            }
            oneDimMemoTable[args[0]] = res;
        }
        return res;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */