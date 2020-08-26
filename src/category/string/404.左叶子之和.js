/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // ===============dfs================
  var res = 0;
  var helper = (node) => {
    if (!node) return;
    if (node.left && !node.left.left && !node.left.right) {
      res += node.left.val;
    };
    helper(node.left);
    helper(node.right);
  }

  helper(root);
  return res;
};
// @lc code=end

