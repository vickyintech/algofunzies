// Leetcode: https://leetcode.com/problems/koko-eating-bananas/

function minEatingSpeed(piles, h) { 
    // Input: piles = [3,6,7,11], h = 8
    // Output: 4
    let left = 0, right = Math.max(...piles), ans = right
    
    // [1,2,3,4]
    while (left <= right) { 
        let mid = Math.floor((left + right) / 2)
        
        let totalHours = 0
        for (const p of piles) { 
            let speed = p / h 
            totalHours += Math.ceil(speed)
        }
        if (totalHours > h) { 
            left = mid + 1
        }
        if (totalHours <= h) { 
            // look to the left 
            right = mid - 1
            Math.min(mid, ans)
        }
    }
    return ans 
}