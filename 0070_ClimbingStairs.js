// Leetcode: 
// dynamic programming problem to understand the fundamentals

function climbStairs (n) {
    // bottom up approach 
    if (n <= 2) return n
    
    let count = new Array(n + 1).fill(0)
    count[1] = 1
    count[2] = 2

    for (let i = 3; i < n + 1; i++) { 
        count[i] = count[i-1] + count[i-2]
    }
    return count[n]
}