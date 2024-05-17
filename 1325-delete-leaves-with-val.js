/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */

var removeLeafNodes = function(root, target) {
    const removeLeafNodesHelper = (root, target) => {
        if(root && removeLeafNodesHelper(root.left, target)) root.left = null;
        if(root && removeLeafNodesHelper(root.right, target)) root.right = null;

        return root && !root.left && !root.right && root.val === target;
    }
    
    removeLeafNodesHelper(root, target);
    
    if(root && !root.left && !root.right && root.val === target) return null;
    return root;
};