/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n

    const temp = []
    for (let i = 0; i < n; i++) {
        if (i <= 3) {
            temp.push(i)
        } else {
            temp.push(temp[i - 1] + temp[i - 2])
        }
    }
    return temp[n - 1] + temp[n - 2]
};