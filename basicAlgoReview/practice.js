/*
This file is just a playground for practices as going through basic algos
*/

//reverse string 

function reverseString(s) { 
    return s.split('').reduce((acc, el) => el+reversed, '' )
}

// Palindrome
// 1. palindrome("abba") === true
// 2. palindrome("abcdefg") === false
// use two pointers

function isPalindrome(s) { 
    s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let start = 0, end = s.length - 1
    while (start < end) { 
        if (s[start] !== s[end]) return false 
        start++
        end --
    }
    return true
}

// Integer reversal  
/*
Examples:
1. reverseInt(15) === 51;
2. reverseInt(981) === 189;
3. reverseInt(500) === 5;
4. reverseInt(-15) === -51;
5. reverseInt(-90) === -9;
*/

function reverseInt(n) { 
    let s = n.toString().split('')
    let reversed = ''
    for (let el of s) { 
        reversed = el + reversed
    }
    return Math.sign(n) < 0? parseInt('-'+ reversed) : parseInt(reversed)
}

// Max chars 
// 1.  maxChar("abcccccccd") === "c"
// 2.  maxChar("apple 1231111") === "1"
// use hashmap

function maxChar(s) { 
    let arr = s.split('')
    let tracker = {}
    let maxChar = ''
    let maxCount = 0

    for (let i = 0; i < arr.length; i++) { 
        if (tracker[arr[i]] === undefined) {
            tracker[arr[i]] = 1
        } else { 
            tracker[arr[i]] += 1
        }
    }

    for (let key in tracker) { 
        if (tracker[key] > maxCount) { 
            maxChar = key
            maxCount = tracker[key]
        }
    }
    return maxChar
}


// FizzBuzz
function fizzBuzz(n) { 
    for (let i = 1; i < n; i++) {
        let num = n[i]
        if (num % 3 && num % 5) {
            console.log('fizzbuzz')
        } else if (num % 3) {
            console.log('fizz')
        } else if (num % 5) {
            console.log('buzz')
        } else { 
            console.log('i')
        }
    }
}

// Array Chunk
// Chunk size two:
//   chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
//   
// Chunk size two:
//   chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
//   
// Chunk size 3:
//   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
//   
//  Chunk size 4:
//  chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
//  
//Chunk size 10:
//  chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) { 
    // leverage array.slice(startIndex, endIndex) -> endIndex should not be included
    let ans = []
    let index = 0
    while (index < array.length) { 
        ans.push(array.slice(index, index + size))
        index+= size
    }
}

//Anagram
/*
Examples:
1. anagrams('rail safety', 'fairy tales') === true
2. anagrams('RAIL! SAFETY!', 'fairy tales') === true
3. anagrams('Hi there', 'Bye there') === false
*/

// Use hashmap to resolve this, runtime o (n)

function anagram(str1, str2) { 
    let counter1 = {}
    let counter2 = {}
    const arr1 = str1.split('').replace(/[^a-z0-9]/gi, '').toLowerCase()
    const arr2 = str2.split('').replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) { 
        counter1[arr1[i]] = 1+ (counter1[arr1[i]] || 0)
        counter2[arr1[i]] = 1+ (counter2[arr1[i]] || 0)
    }

    for (let char of counter1) { 
        if (counter1[char] !== counter2[key]) return false
    }
    return true
}

// Capitalization 
// 1. capitalize('a short sentence') --> 'A Short Sentence'
// 2. capitalize('a lazy fox') --> 'A Lazy Fox'
// 3. capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(s) { 
    let result = s[0].toUpperCase()

    for (let i = 1; i < s.length; i++) { 
        if (s[i - 1] === ' ') {
            result += s[i].toUpperCase()
        } else { 
            result += s[i]
        }
    }
    return result
}


/*
You are given two strings s1, and t. Return true if they are equal or false otherwise. Assume that you can have a wild card character in s1 denoted by a '.' 

assuming two strings are in the same order?

maybe similar to : https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

Ex- i) r.kt, rokt returns true 

    ii) r.k, rokt return false
*/

function validaAnagramWithWildChar(s, t) { 
   
    
}