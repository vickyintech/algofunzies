// Leetcode: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 

function kidsWithCandies(candies, extraCandies) {
    // Time o(n) space o(1)
    // find the maxium in candies array
    // go thru elements of array and check if candies[i] + extraCandies >= maxium 
    let max = Math.max(...candies)
    let result = []
    for (let i = 0; i < candies.length; i++) {
        let currentMax = candies[i] + extraCandies
        if(currentMax >= max) {
            result.push(true)
        }else {
            result.push(false)
        }
    }
    return result
}