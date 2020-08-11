/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // 贪心算法，按从大到小取
  var keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
      ans = '';
  for (var i = 0; i < keys.length; i++) {
    while (num >= keys[i]) {
      num -= keys[i];
      ans += values[i];
    }
  }
  return ans;
};
// @lc code=end

