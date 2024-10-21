//LeetCode: https://leetcode.com/problems/longest-consecutive-sequence/


//nums = [100,4,200,1,3,2]

function longest(nums) { 
    const tracker = new Set(nums)
    const longest = 0

    for (let i = 0; i < nums.length; i++) { 
        if (!tracker.has(nums[i] - 1)) { 
            let length = 1
            while (tracker.has(num[i] + length)) { 
                length ++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
}