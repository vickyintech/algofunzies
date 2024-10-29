// Leetcode: https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {
    // use two pointers method 
    // remove space and special characters 
    let cleanString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let start = 0, end = cleanString.length - 1
    while (start < end) { 
        if (cleanString[start] !== cleanString[end]) { 
           return false     
        }
        start++
        end--
    }
    return true
}

// Runtime O(n) number of string 
// Space O(1) No extra space required 