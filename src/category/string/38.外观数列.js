/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  var str = '1';

  while (n > 1) {
    var count = 0,
        temp = str[0],
        tempStr = '';

    for (var i = 0; i < str.length; i++) {
      if (str[i] == temp) count++;
      else {
        tempStr += count + temp;
        count = 1;
        temp = str[i];
      }
    }
    str = tempStr + count + temp;
    n--;
  }

  return str;
};
// @lc code=end

