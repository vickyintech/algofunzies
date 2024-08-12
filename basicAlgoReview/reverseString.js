// Leet code : https://leetcode.com/problems/reverse-string/description/

// Approach 1 using built in .reverse()
function reverseString(string) {
    return string.split('').reverse().join('')
}

/* 
    Approach 2 using 2 pointers 
    Time complexity:O(n)
    Space complexity:O(1)
*/

function reverseString(string) {
    let newArr = string.split('')
    let start = 0
    let end = newArr.length - 1 

    while(start < end) {
        [newArr[start], newArr[end]] =  [newArr[end], newArr[start]]        
        start++
        end --
    }
}

/* 
    Approach 3 using for loops
    Time complexity:O(n)
    Space complexity:O(n)
*/

function reverseString(string) {
    let newString = ''
    for(let i = string.length -1 ; i>-1; i--) {
        newString+= string[i]
    }
    return newString
}

