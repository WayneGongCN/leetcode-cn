/**
 * 哈希表实现
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     const hash = {}
//     for (let i = 0, len = nums.length; i < len; i++) {
//         if (hash[nums[i]]) {
//             delete hash[nums[i]]
//         } else {
//             hash[nums[i]] = true
//         }
//     }
//     return Object.keys(hash)[0]
// };

/**
 * 数学实现
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numsTotal = total(nums)
    const doubleTotal = total([...new Set(nums)]) * 2
    return doubleTotal - numsTotal
}

function total (arr) {
    return arr.reduce((total, i) => total += i, 0)
}