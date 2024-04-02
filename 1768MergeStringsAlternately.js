// Algo expert tbd
// Leetcode https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

function mergeAlternately (word1, word2) {
    // Time complexity TIME AND SPACE O(N)
    let result = ''
    const maxLength = Math.max(word1.length, word2.length)

    for(let i = 0; i<maxLength; i++) {
        if(i<word1.length) result += word1[i]
        if(i<word2.length) result += word2[i]
    }
    return result 

    // Using two pointers 
    let n = word1.length, m = word2.length
    let mergedString = ''
    let i = 0, j = 0

    while (i<n && j< m) {
        mergedString += word1[i]
        mergedString += word2[j]
        i++
        j++
    }
    while (i<n) {
        mergedString += word1[i]
        i++
    }

    while(j<m) {
        mergedString += word2[j]
        j++
    }
    
    return mergedString
    
}