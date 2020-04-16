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

    let array = s
        .split('')
        .map((x, i, arr) => {
            x = map[x]
            const len = arr.length
            const next = i + 1 > len -1 ? null : map[arr[i + 1]]

            if (next !== undefined) {
                if (x >= next) {
                    return x
                } else {
                    return x * -1
                }
            }
        })

    return array.reduce((count, x) => count += x, 0)
};