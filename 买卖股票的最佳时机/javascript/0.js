/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let price = 0
    for (let i = 0, len = prices.length; i < len; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > price) {
            price = prices[i] - min
        }
    }
    return price
};