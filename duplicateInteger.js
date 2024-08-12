/*
Duplicate Integer
Solved 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

neetcode: https://neetcode.io/problems/duplicate-integer
*/

function hasDuplicate(nums) {
        let tracker = new Set ()
        
        for (const num of nums) {
            if(!tracker.has(num)) {
                tracker.add(num)
            }else {
                return true
            }
        }
        return false
}