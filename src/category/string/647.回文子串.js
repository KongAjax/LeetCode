/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */
   // dp[i][j] = true/false 表示，字符串 i 到 j 是否是回文串
   // 状态转移方程：
   // 满足回文还有个细节，就是单个字符也是回文
   // 如果 s[i] == s[j], 并且s[i-1] == s[j+1]，那么 dp[i][j] = true 或者 i - j < 2 单个字符
   // 否则 dp[i][j] = false
   // base case：
   // 边界就是字符串大小，初始值全是false，因为我们要数true
   // 枚举状态 统计true 的个数就是可以了；

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  var n = s.length,
      dp = Array.from({length: n},() => new Array(n).fill(false)),
      result = 0;
      for(var i = 0; i < n; i++) {
        for(var j = i; j >= 0; j--) {
          if(s[i] == s[j] && (i-j< 2 || dp[i-1][j+1])){
            dp[i][j] = true;
            result ++;
          }
        }
      }
      return result;
};
// @lc code=end

