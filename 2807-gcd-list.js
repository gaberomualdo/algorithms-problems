/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const gcd = (n, m) => {
    let res = 1;
    if(Math.max(n, m) % Math.min(n, m) === 0) {
        return Math.min(n, m);
    }
    for(let i = 2; i <= Math.max(n, m); i++) {
        if(n % i === 0 && m % i === 0) {
            res = i;
        }
    }
    return res;
}
var insertGreatestCommonDivisors = function(head) {
    let pointer = head;

    while(pointer.next) {
        const next = pointer.next;
        pointer.next = new ListNode(gcd(pointer.val, next.val), next || null);
        pointer = next;
    }

    return head;
};