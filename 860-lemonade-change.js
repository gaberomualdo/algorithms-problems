/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const helper = (fives, tens, ix) => {
        if(fives < 0 || tens < 0) return false;
        if(ix >= bills.length) return true;
        for(let i = ix; i < bills.length; i++) {
            const bill = bills[i];
            if(bill === 5) fives++;
            if(bill === 10) {
                fives--;
                tens++;
                if(fives < 0) return false;
            }
            if(bill === 20) {
                return helper(fives - 3, tens, i + 1) || helper(fives - 1, tens - 1, i + 1)
            }
        }
        return true;
    }
    return helper(0,0,0);
};