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
var deleteDuplicates = function(head) {
    let pointer = head;

    while(pointer) {
        let temp = pointer.next;
        while(temp && temp.val === pointer.val) {
            temp = temp.next;
        }
        pointer.next = temp;
        pointer = pointer.next;
    }

    return head;
};