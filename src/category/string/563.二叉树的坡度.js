/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
  // 汉语真是博大精深呀，本质上就是求左右子树 的和的差
  var res = 0

  var helper = (root) => {
      if (!root) return 0
      var left = helper(root.left)
      var right = helper(root.right)
      res += Math.abs(left - right)
      return root.val + left + right
  }
  helper(root)
  return res
};
// @lc code=end

