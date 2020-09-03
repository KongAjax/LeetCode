/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
 */

// @lc code=start
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
var convertBST = function(root) {
  var sum = 0;
  
  var helper = node => {
    if (!node) return 0;

    helper(node.right);
    sum += node.val;
    node.val = sum;
    helper(node.left);
  }
  
  helper(root);
  return root;
};
// @lc code=end

