/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let len = s.length
    let count = 0
    for (let i = 0; i < len; i++) {
        const item = map[s[i]]
        const next = i + 1 > len - 1 ? 0 : map[s[i + 1]]
        count += (item >= next ? 1 : -1) * item
    }
    return count
};