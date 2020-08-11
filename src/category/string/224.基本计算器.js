/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let sum = 0,
      stack = [],
      sign = 1,
      i = 0,
      n = s.length;
  
  while (i < n) {
    let c = s[i];
    if (c === ' ') {
      i++;
    }
    else if (c === '-') {
      sign = -1;
      i++;
    }
    else if (c === '+') {
      sign = 1;
      i++;
    }
    else if (c === '(') {
      stack.push( sum, sign );
      sum = 0;
      sign = 1;
      i++;
    }
    else if (c === ')') {
      sum = sum * stack.pop() + stack.pop();
      i++;
    }
    else {
      let temp = c;
      while (i < n - 1 && /\d/.test(s[i + 1])) {
        temp += s[i + 1];
        i++;
      }
      i++;
      sum += +temp * sign;
    }
  }
  
  return sum;
};

// @lc code=end

