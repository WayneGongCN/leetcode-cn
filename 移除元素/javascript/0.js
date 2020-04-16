/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for (let j = 0, len = nums.length; j < len; j++) {
      if (nums[j] !== val) {
        nums[i++] = nums[j]
      }
    }
    return i
};