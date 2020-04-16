/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sumArray = []
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i === 0) this.sumArray[0] = nums[0]
        else {
            this.sumArray[i] = nums[i] + this.sumArray[i - 1]
        }
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i > j) {
        [i, j] = [j, i]
    } else {
        return this.sumArray[j] - (i - 1 < 0 ? 0 :  this.sumArray[i - 1])
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */