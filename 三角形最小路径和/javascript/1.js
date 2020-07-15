/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length
    const t = Array.from({ length: n }, () => Array.from({ length: n }))

    t[0][0] = triangle[0][0]
    for (let i = 1; i < n; i++) {
        t[i][0] = t[i - 1][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            t[i][j] = Math.min(t[i - 1][j - 1], t[i - 1][j]) + triangle[i][j]
        }
        t[i][i] = t[i - 1][i - 1] + triangle[i][i]
    }

    console.log(t)
    return Math.min(...t[n - 1])
};