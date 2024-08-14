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

