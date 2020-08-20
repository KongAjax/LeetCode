/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  var ans = 0;
  var helper = (node) => {
    if (node) {
      if (node.val >= L && node.val <= R) {
        ans += node.val;
      };
      helper(node.left);
      helper(node.right);
    }
  }
  helper(root);
  return ans;
};
// @lc code=end

