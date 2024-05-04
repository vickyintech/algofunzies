// Leetcode: https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75


// Return the maximum amount of water a container can store.
//Notice that you may not slant the container.

//Input: height = [1,8,6,2,5,4,8,3,7]
//Output: 49

function maxArea (height) {
    let maxArea = 0
    let left = 0
    let right = height.length -1 

    while(left < right) {
        let width = right - left
        let height = Math.min(height[left], height[right])
        maxArea= Math.max(maxArea, width * height)
        if(height[left] < height[right]) {
            left ++
        }
        else {
            right --
        }
    }
    return maxArea
}