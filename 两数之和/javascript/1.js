/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        const item = nums[i]
        const diff = target - item
        if (hashMap[diff] !== undefined) {
            return [hashMap[diff], i]
        }
        hashMap[item] = i
    }
};