/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false

    let result = 0
    while (x > result) {
        result = result * 10 + x % 10
        x = parseInt(x/10)
    }
    return result === x || parseInt(result / 10) === x
};