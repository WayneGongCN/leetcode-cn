/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length
    let count = 1
    let current = nums[0]

    for (let i = 0; i < len - 1; i++) {
        count += current === nums[i + 1] ? 1 : -1

        if (count === 0) {
            current = nums[i]
            count = 1
        }
    }

    return current
};