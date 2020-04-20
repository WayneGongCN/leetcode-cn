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
    s = s.replace(/[ ]/g, '').split('')
    let temp = []
    for (let i = 0, len = s.length; i < len; i++) {
        const item = s[i]
        if (temp.length && map[temp[temp.length - 1]] === item) {
            temp.pop()
        } else {
            temp.push(item)
        }
    }
    return temp.length === 0
};