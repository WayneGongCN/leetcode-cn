/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        if (hash[nums[i]]) {
            delete hash[nums[i]]
        } else {
            hash[nums[i]] = true
        }
    }
    return Object.keys(hash)[0]
};