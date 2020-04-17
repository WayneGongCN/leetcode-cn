/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 通过迭代反转链表
 */
var reverseList = function(head) {
    let pre = null
    while (head) {
        let tempNode = head.next
        head.next = pre
        pre = head
        head = tempNode
    }
    return pre
};

