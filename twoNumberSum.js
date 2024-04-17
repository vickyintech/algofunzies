// Algo expert https://www.algoexpert.io/questions/two-number-sum

// Use hashmap to solve this
function twoNumberSum(array, targetSum) {
    let hashmap = {}

    for (let i = 0; i< array.length; i++ ) {
        let compareVal = targetSum - array[i]
        if(compareVal in hashmap ) {
            return [compareVal,  array[i]]
        }else {
            hashmap[array[i]] = true
        }
    }
    return []
}

// Variation from Leetcode: https://leetcode.com/problems/two-sum/
// nums = [3,2,4], target = 6
// Output: [1,2]

function twoNumberSum(array, targetSum) {
    let hash = {}

    for (let i = 0; i<nums.length; i ++) {
        
        let compareVal = target - nums[i]
        
        if(compareVal in hash) {
            return [hash[compareVal], i]
        }else {
            hash[nums[i]] = i
        }
    }
    return []
}

// Use two pointers 
function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a-b )
    let start = 0;
    let end = array.length -1 

    while (start < end) {
        let compareVal = array[start] + array[end]
        if(compareVal === targetSum) {return [array[start], array[end]]}
        if(compareVal < targetSum) { start ++}
    }
}

// unsorted array:
// https://leetcode.com/problems/two-sum/

function twoNumberSum(array, targetSum) {
    const numbersIndex = array.map((num, index)=> ({value: num, index}))
    numbersIndex.sort((a,b)=> a.value - b.value) 

    let start = 0
    let end = array.length -1 

    while(start < end ) {
        let compareVal = array[start] + array[end]
        if(compareVal === targetSum) {return [numbersIndex[start].index, numbersIndex[end.index]]}
        if (compareVal < targetSum) {start ++} else { end --}
    }
    return []
}