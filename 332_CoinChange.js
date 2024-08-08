// AlgoExpert https://www.algoexpert.io/questions/min-number-of-coins-for-change
// Leetcode https://leetcode.com/problems/coin-change/description/

function coinChange (coins, amount) {
    const dp = Array(amount + 1).fill(Infinity)
        // base case 
        dp[0] = 0 
        for(let i = 1; i<=amount; i++) {
            for(const coin of coins) {
                if(i - coin >=0) {
                    dp[i] = Math.min( dp[i], dp[i-coin] 
                    +1)
                }
            }
        }
        return dp[amount] === Infinity? -1: dp[amount]
}