/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var dummy = new ListNode(-1); // 哨兵节点
  dummy.next = head;

  var node = dummy;
  while (node.next) {
      if (node.next.val === val) {
          node.next = node.next.next;
          // break; // 移除break是删除所有节点的意思
      } else {
        node = node.next;
      }
  }
  return dummy.next;
};
// @lc code=end

