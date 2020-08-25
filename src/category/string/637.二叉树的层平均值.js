/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
  // ======================BFS========================================== 

  // var result = [],
  //     arr = [];
  // arr.push(root);

  // while (arr.length) {
  //   var sum = 0,
  //       len = arr.length;
    
  //   for (var i = 0; i < len; i++) {
  //     sum += arr[0].val;
  //     if (arr[0].left) arr.push(arr[0].left);
  //     if (arr[0].right) arr.push(arr[0].right);
  //     arr.shift();
  //   }
  //   result.push(sum / len)
  // }

  // return result;
  // =========================DFS=========================================

  var l = [root],
      r = [];
  while (l.length) {
    r.push(l.reduce((x,y) => x + y.val, 0) / l.length);
    l = l.reduce((x,y)=>{
      if (y.left) {
        x.push(y.left);
      }

      if (y.right) {
        x.push(y.right);
      }
      return x;
    },[])
  }

  return r;
};
// @lc code=end

