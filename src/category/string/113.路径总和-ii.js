/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  var ans = [];
  helper(root, sum, [])
  return ans;

  function helper(root, sum, arr) {
    if (!root) return;
    arr.push(root.val);
    if (!root.left && !root.right && root.val == sum) {
      ans.push([...arr]);
    }
    helper(root.left, sum - root.val, arr);
    helper(root.right, sum - root.val, arr);
    // 上面两步骤结束之后要把arr出栈进行回溯
    arr.pop();
  }
};
// @lc code=end

