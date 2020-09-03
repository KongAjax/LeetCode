/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  var min = Number.MAX_SAFE_INTEGER;
  var prevNode = -1;
  var helper = root => {
    if (!root) return;
    helper(root.left);
    if (prevNode > -1) {
      min = Math.min(min, root.val - prevNode);
    }
    prevNode = root.val;
    helper(root.right);
  }
  helper(root);
  return min;
};
// @lc code=end

