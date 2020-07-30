/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map()
  let i = 0
  let maxLen = 0
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      //更新子串起始位置i
      i = Math.max(map.get(s[j]) + 1, i)
    }
    //记录or更新每个字符最后出现位置
    map.set(s[j], j)
    maxLen = Math.max(j - i + 1, maxLen)
  }
  return maxLen
};
// @lc code=end

