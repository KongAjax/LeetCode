/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function (head) {
  // ===========hash=============
  // if (!head || !head.next) return false;
  // var map = new Map();
  // while (head) {
  //   if (map.has(head)) return true;
  //   map.set(head, true);
  //   head = head.next;
  // }

  // return false;

  // ============快慢指针：如果是环形节点，肯定会相遇=============
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
};
// @lc code=end

