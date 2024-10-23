// Leetcode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Input: nums = [3,4,5,6,1,2]
// Output: 1

// When array is sorted and try to search, use binary search

function findMin(nums) { 
    let left = 0, right = nums.length - 1 
    while (left < right) { 
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[right]) {
            // search left 
            right = mid
        } else { 
            left = mid + 1
        }
    }
    return nums[left]
}

// Note: While loop needs to set to left < right instead of left <= right because in the condition we are comparing nums[mid] < nums[right]. There might be a edge case when left = right = mid and break the algorithm 