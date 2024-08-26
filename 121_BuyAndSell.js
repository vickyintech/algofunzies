// Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) { 
    let left = 0, right = 1, maxProfit = 0
    while (left < prices.length - 1) { 
        if (prices[left] < prices[right]) {
            const currentMargin = prices[right] - prices[left]
            maxProfit = Math.max(currentMargin, maxProfit)
        } else { 
            // sliding widow 
            left = right 
        }
        right ++
    }
    return maxProfit
}