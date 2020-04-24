/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = []
    const result = []
    
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) stack.pop()
        result[i] = stack.length ? stack[stack.length - 1] - i : 0
        stack.push(i)
    }
    return result
};