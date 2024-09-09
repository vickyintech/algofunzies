// Leetcode: https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

//You must write an algorithm that runs in O(n) time and without using the division operation.


/*

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

function productExceptSelf (nums) {
    const ans = []
    const n = nums.length 
    const prefix = new Array(n).fill(1)
    const suffix = new Array(n).fill(1)

    for (let i = 1; i<n; i++) {
        prefix[i] = nums[i-1] * prefix[i-1]
    }

    for(let i = n-2; i>-1; i--) {
        suffix[i] = suffix[i+1] * nums[i+1]
    }

    for(let i = 0; i<n; i++) {
        ans[i] = prefix[i] * suffix[i]
    }

    return ans

}

// Can I come up with a better solution that is O(1)?

function productExceptSelf(nums) { 
    const ans = []

    let prefix = 1
    let postfix = 1

    for (let i = 0; i < nums.length; i++) { 
        ans[i] = prefix 
        prefix = prefix * nums[i]
    }

    for (let i = nums.length - 2; i >= 0; i--) { 
        postfix = nums[i] * postfix
        ans[i] = ans[i] * postfix
    }

    return ans
}