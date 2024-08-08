// Leetcode https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

function moveZeros (nums) {
    let i = 0
    let j = 1
    while(j<=nums.length) {
        if(nums[i] !== 0) {
            i++
            j++
        }else if( nums[j]!==0) {
            //swap
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }else {
            j++
        }
    }
}