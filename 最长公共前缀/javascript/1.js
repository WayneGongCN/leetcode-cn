/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let short = strs.sort((x, y) => x.length - y.length)[0]
    if (!short) return ''

    for (let i = 0, len = short.length; i < len; i++) {
        const temp = strs.every(x => x.startsWith(short))
        if (temp) {
            return short
        } else {
            short = short.slice(0, short.length - 1)
        }
    }
    return ''
};