/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  var helper = (r1, r2) => {
    if (r1 == r2) return true;
    if (r1 && r2 && r1.val == r2.val) {
      return helper(r1.left, r2.right) && helper(r1.right, r2.left);
    }
    return false;
  }

  return root ? helper(root.left, root.right) : true;
};
// @lc code=end


