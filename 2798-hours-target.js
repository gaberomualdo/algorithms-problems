/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let i = 0;
    for(const employee of hours) {
        if(employee >= target) i++;
    }
    return i;
};