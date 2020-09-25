/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // return Array.from(new Set(nums1.filter( r => nums2.includes(r))))
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];

    return nums1.filter(r => nums2.includes(r));
};
// @lc code=end

