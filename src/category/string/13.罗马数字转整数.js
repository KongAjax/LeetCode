/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000],
  ]),
      ans = 0;

  for (var i = 0; i < s.length; i++) {
      var cur = map.get(s[i]);
      var next = map.get(s[i + 1]) || 0;
      cur < next
          ? ans -= cur
          : ans += cur;
  }

  return ans;
};
// @lc code=end

