//Leetcode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

function twoSum(nums, target) { 
    let start = 0, end = nums.length - 1 
    while (start < end) { 
        const sum = nums[start] + nums[end]
        if (sum > target) {
            end--
        } else if (sum < target) {
            start++
        } else { 
            return [start+1, end +1]
        }
    }
    return []
}