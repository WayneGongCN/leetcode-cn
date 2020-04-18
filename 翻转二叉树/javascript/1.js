/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归实现
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null
    const right = invertTree(root.right)
    const left = invertTree(root.left)
    return {
        val: root.val,
        right: left,
        left: right
    }
};