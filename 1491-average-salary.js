/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    if(salary.length <= 2) return 0;
    let total = 0;
    let min = salary[0];
    let max = salary[0];
    for(const sal of salary) {
        if(sal < min) min = sal;
        if(sal > max) max = sal;
        total += sal;
    }
    return (total - min - max) / (salary.length - 2);
};