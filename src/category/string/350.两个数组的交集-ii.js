/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = {};
  const res = [];
  for (const num1 of nums1) { // 存下nums1数字的出现次数
    if (map[num1]) {
      map[num1]++;
    } else {
      map[num1] = 1;
    }
  }
  for (const num2 of nums2) { // 遍历nums2看看有没有数字在nums1出现过
    const val = map[num2];
    if (val > 0) {            // 出现过
      res.push(num2);         // 推入res数组
      map[num2]--;            // 匹配掉一个，就少了一个
    }
  }
  return res;
};
// @lc code=end

