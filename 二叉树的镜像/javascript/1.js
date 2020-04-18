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
    const right = mirrorTree(root.right)
    const left = mirrorTree(root.left)
    return {
        val: root.val,
        right: left,
        left: right
    }
};