/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (!root) return null
    return {
        val: root.val,
        right: mirrorTree(root.left),
        left: mirrorTree(root.right)
    }
};