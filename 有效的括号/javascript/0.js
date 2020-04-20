/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('').filter(Boolean)

    const stack = []
    const len = s.length
    const keyMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < len; i++) {
        const item = s[i]
        if (stack.length && keyMap[stack[stack.length - 1]] === item) {
            stack.pop()
        } else {
            stack.push(item)
        }
    }

    return stack.length === 0
};