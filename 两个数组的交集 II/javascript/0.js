/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums2.length > nums1.length) [nums1, nums2] = [nums2, nums1]

    const map = {}
    for (let i = 0, len = nums1.length; i < len; i++) {
        map[nums1[i]] = (map[nums1[i]] || 0) + 1
    }

    const result = []
    for (let i = 0, len = nums2.length; i < len; i++) {
        if (map[nums2[i]]) {
            map[nums2[i]]--
            result.push(nums2[i])
        }
    }
    return result
};