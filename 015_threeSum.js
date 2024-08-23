// Leetcode https://leetcode.com/problems/3sum/description/

function threeSum(nums) { 
    nums.sort((a, b) => a - b)
    let ans = []
    for (let i = 0; i < nums.length; i++) { 
        if (i> 0 && nums[i] === nums[i - 1]) continue // continue means skip the following operation
        let start = i + 1, end = nums.length - 1
        while (start < end) { 
            let sum = nums[i] + nums[start] + nums[end]
            if (sum > 0) {
                end--
            } else if (sum < 0) {
                start++
            } else {
                ans.push([num[i], num[start], num[end]])
                start++
                end --
                while (start < end && nums[start] === nums[start - 1]) { 
                    start ++
                }
            }
        }     
    }

    return ans
    
}