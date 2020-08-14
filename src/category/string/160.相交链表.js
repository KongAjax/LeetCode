/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    var node1 = headA,
        node2 = headB;

    while (node1 !== node2) {
      node1 = node1 ? node1.next : headB;
      node2 = node2 ? node2.next : headA;
    }

    return node1;
};
// @lc code=end

