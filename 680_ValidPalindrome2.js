// Leetcode: https://www.youtube.com/watch?v=MnKnTbBDhHc

/*
Input: s = "aba"
Output: true

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

*/

function validPalindrome (s) {

let start = 0
let end = s.length -1 

while (start < end) {
    
    if(s[start] !== s[end]) {
        let one = s.slice(start, end)
        let two = s.slice(start+1, end+1)
        return isPalindrome(one) || isPalindrome(two)
    }
    start++ 
    end --
}

return true

}

function isPalindrome(s) {
    return s === s.split('').reverse().join('')
}

