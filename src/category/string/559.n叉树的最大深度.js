/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  // if (!root) return 0;
  // var nums = 0;
  // if (root.children) {
  //   root.children.forEach(item => {
  //     var max = maxDepth(item);
  //     nums = Math.max(max, nums);
  //   })
  // }
  // return nums + 1;

  // 函数式编程
  var helper = (root, depth) => {
    return Math.max(
      depth,
      ...root.children.flatMap(item => helper(item, depth + 1))
    );
  }

  return root ? helper(root, 1) : 0;
};
// @lc code=end

