/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  // ==============DFS=========================
  var flag = true; // 先把所有二叉树先当做平衡二叉树
  var helper = (r) => {
    if (!r) return 0;// 当节点不存在时，高度为0
    var left = helper(r.left);
    var right = helper(r.right);// dfs常规操作,求出左右子树高度
    if (Math.abs(left - right) > 1) {
      flag = false;// 高度差超过1时，非平衡二叉树，直接false
    }
    return Math.max(left, right) + 1 // 这里加1是因为要把父节点高度算进去
  };
  helper(root);
  return flag;
};
// @lc code=end

