/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function getValue (s) {
        switch (s) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
            default:
                return 0
        }
    }

    let len = s.length
    let count = 0
    for (let i = 0; i < len; i++) {
        const item = getValue(s[i])
        const next = getValue(s[i + 1])

        if (item >= next) {
            count += item
        } else {
            count -= item
        }
    }
    return count
};