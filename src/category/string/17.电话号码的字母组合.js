/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  var len = digits.length,
      map = new Map(),
      ans = []; // 返回值
  map.set('2', 'abc');
  map.set('3', 'def');
  map.set('4', 'ghi');
  map.set('5', 'jkl');
  map.set('6', 'mno');
  map.set('7', 'pqrs');
  map.set('8', 'tuv');
  map.set('9', 'wxyz');

  function dfs(str, i) {
    if (i === len) {
      ans.push(str);
      return;
    } else {
      var temp = map.get(digits[i]);
      for (var j = 0; j < temp.length; j++) {
        dfs(str + temp[j], i + 1)
      }
    }
  }
  dfs('', 0);

  return ans;
};
// @lc code=end
