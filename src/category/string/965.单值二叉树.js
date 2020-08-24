/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return false;
  var left  = root.left == null || (root.val == root.left.val && isUnivalTree(root.left));
  var right  = root.right == null || (root.val == root.right.val && isUnivalTree(root.right));

  return left && right;
};
// @lc code=end

