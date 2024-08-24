// Leetcode: https://leetcode.com/problems/contains-duplicate/

function containDupe(nums) {
    let tracker = new Set()
    for (let i = 0; i < nums.length; i++) { 
        if (tracker.has(nums[i])) {
            return true
        } 
        tracker.add(nums[i])
    }
    return false
 }