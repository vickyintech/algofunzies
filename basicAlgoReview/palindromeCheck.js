// Algo expert https://www.algoexpert.io/questions/two-number-sum
// Leetcode https://leetcode.com/problems/valid-palindrome/

// Quick solution
function isPalindrome(string) {
    let reversedString = string.replace(/[^a-z0-9]/gi,"").toLowerCase().split('').reverse().join('')
    if(reversedString === string.replace(/[^a-z0-9]/gi,"").toLowerCase()) {
        return true
    } else {
        return false
    }
}

// Two pointer method
function isPalindrome(string) {
    let arr = string.replace(/[^a-z0-9]/gi,"").toLowerCase().split('')
    let start = 0
    let end = arr.length - 1 
    while(start < end) {
        if(arr[start] !== arr[end]) {
            return false
        }
        start ++
        end --
    }
    return true
}