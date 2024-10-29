// Leetcode: https://leetcode.com/problems/binary-search/

// This is a fundamental problem and easy as well

function binarySearch(nums, target) { 
    //nums = [-1,0,3,5,9,12], target = 9
    let left = 0, right = nums.length - 1 
    while (left <= right) { 
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
            
        } else if (nums[mid] > target) {
            right = mid - 1
        } else { 
            left = mid + 1
        }
    }
    return -1 
}