// Leetcode: https://leetcode.com/problems/search-in-rotated-sorted-array/

//Input: nums = [3,4,5,6,1,2], target = 1
//Output: 4


function searchTarget(nums, target) {
    // sorted array  looking for target, use binary search as optimal solution 
    let left = 0, right = nums.length - 1 
    while (left < right) { 
        const mid = Math.floor((left + right) / 2) 

        if (target === nums[mid]) { return mid }

        // determine if the array is asceding
        if (nums[left] <= nums[mid] ) {
            // search on the left
            if (target < nums[left]|| target > nums[mid]) {
                // move to the right 
                left = mid + 1
            } else { 
                // continue search on the left
                right = mid -1
            }
        } else { 
            // search on the right
            if (target > nums[right] || target < nums[mid]) {
                // move to the left
                right = mid - 1 
            } else { 
                // continue on the right
                left = mid + 1
            }
        }
    }
    return -1 
 }