/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // ===========字符串解法，技巧性非常非常强。也可以放在数组里==============
  // var str1 = '',
  //     str2 = '';
  // while (head) {
  //   str1 = str1 + head.val;
  //   str2 = head.val + str2;
  //   head = head.next;
  // }
  // return str1 === str2;

  // ===========快慢指针解法=============================================
  
  if(!head || !head.next) return true;

  var mid = head,
      pre = null,
      reversed = null;
  while (head && head.next) {
    
  }
};
// @lc code=end

