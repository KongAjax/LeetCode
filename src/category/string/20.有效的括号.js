/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  var left = [];
  
  for(var i of s){
    if(i in map){
      left.push(i);
    } else {
      if(i !== map[left.pop()]) return false;
    }
  }

  return !left.length;
};
// @lc code=end

