/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // dfs 深度优先遍历
  if (!root) return [];
  var ans = [];
  helper(root, '');
  return ans;

  function helper(root, str) {
    str += root.val + '->';
    if (!root.left && !root.right) {
      ans.push(str.slice(0, -2));
      return;
    }

    root.left && helper(root.left, str);
    root.right && helper(root.right, str);
  }
};
// @lc code=end

