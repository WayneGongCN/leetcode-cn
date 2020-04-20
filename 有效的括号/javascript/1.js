/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    s = s.replace(/ /g, '').split('')

    let stack = []
    for (let i = 0, len = s.length; i < len; i++) {
        const item = s[i]
        const last = stack.length && stack[stack.length - 1]

        if (map[last] !== item) {
            stack.push(item)
        } else {
            stack.pop()
        }
    }
    return stack.length === 0
};