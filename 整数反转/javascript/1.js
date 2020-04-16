/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const edeg = 2**31
    const max = edeg - 1
    const min = -edeg
    const result = (x > 0 ? 1 : -1) * String(x).split('').filter(x => x !== '-').reverse().join('')
    return result > max || result < min ? 0 : result 
};