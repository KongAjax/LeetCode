/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  var flag = null,
    stack = [],
    s = '+' + s.replace(/\s+/g, ''); // 空格删除

  for (var i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      var nums = s[i];
      // 处理多位数
      while (i < s.length - 1 && /\d/.test(s[i + 1])) {
        nums += s[i + 1];
        i++;
      }

      switch (flag) {
        case "+": {
          stack.push(nums - 0);
          break;
        }
        case "-": {
          stack.push(0 - nums);
          break;
        }
        case "*": {
          stack.push(stack.pop() * nums);
          break;
        }
        case "/": {
          stack.push(parseInt(stack.pop() / nums));
          break;
        }
      }
    } else {
      // flag记录符号
      flag = s[i];
    }
  }
  // 求和
  return stack.reduce((prev, curr) => prev + curr, 0)
};

// @lc code=end

