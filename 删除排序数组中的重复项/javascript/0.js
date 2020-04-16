/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for (let j = 0, len = nums.length; j < len; j++) {
      if (nums[i] !== nums[j]) {
        nums[++i] = nums[j]
      }
    }
    return ++i
};