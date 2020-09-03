/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  var max = 0,
      map = new Map();
  dfs(root);

  function dfs(root) {
    if (!root) return;
    map.set(root.val, (map.get(root.val) || 0) + 1);
    max = Math.max(max, map.get(root.val));
    dfs(root.left);
    dfs(root.right);
  }

  return [...map.entries()]
    .filter(([k, v]) => v == max)
    .map(([k, v]) => k);
};
// @lc code=end

