/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // ==========================BFS==========================
  // ==========================DFS 以后在刷吧================
  if (!root) return [];
  var ans = [],
    queue = [root];
  while (queue.length) {
    var curr = [],
        temp = [];
    while (queue.length) {
      var node = queue.shift();
      curr.push(node.val);

      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }

    ans.unshift(curr);
    queue = temp;
  }

  return ans;
};
// @lc code=end

