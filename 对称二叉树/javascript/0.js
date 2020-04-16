/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true
    return isMirr(root.left, root.right)
};

var isMirr = function (t1, t2) {
    if (t1 === null && t2 === null) return true
    if (t1 === null || t2 === null) return false
    return t1.val === t2.val && isMirr(t1.left, t2.right) && isMirr(t1.right, t2.left)
}