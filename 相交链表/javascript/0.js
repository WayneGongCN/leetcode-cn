/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA
    let pB = headB
    let exchange = 0

    while (true) {

        if (pA === null) {
            pA = headB
            exchange++
        }

        if (pB === null) {
            pB = headA
            exchange++
        }

        if (exchange === 2 && pA === pB) {
            return pA
        }


        if (exchange > 2) {
            return null
        }


        pA = pA.next
        pB = pB.next
    }
    
};