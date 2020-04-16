/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    let select = strs[0]

    for (let i = 0, len = select.length; i < len; i++) {
        const temp = strs.every(x => x.startsWith(select))
        if (temp) {
            return select
        } else {
            select = select.slice(0, select.length - 1)
        }
    }
    return ''
};