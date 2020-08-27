/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  // js + 字符串处理
  var dfsHelper = (root) => {
    if (!root) return '';
    if (!root.left && !root.right) {
      return root.val + '|';
    }
    return dfsHelper(root.left) + dfsHelper(root.right);
  }
  return dfsHelper(root1) == dfsHelper(root2);
};
// @lc code=end

