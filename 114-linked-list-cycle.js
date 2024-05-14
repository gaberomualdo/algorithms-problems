/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const seen = [];
    while(head) {
        if(seen.indexOf(head) > -1) {
            return true;
        }
        seen.push(head);
        head = head.next;
    }
    return false;
};