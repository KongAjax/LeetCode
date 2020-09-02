/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  var helper = (root, sum) => {
    if (!root) return false;
    sum -= root.val;
    if (sum == 0 && !root.left && !root.right) return true;
    return helper(root.left, sum) || helper(root.right, sum);
  }

  return root ? helper(root, sum) : false;
};
// @lc code=end

