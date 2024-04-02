// Algo expert tbd
// Leetcode https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

function gcdOfStrings (string1, string2) {
 if(str1 + str2 !== str2 + str1 ) {return ''}
    
    let m = str1.length, k = str2.length

    const base = findGCD(m, k) 

    return str2.slice(0, base)

}

function findGCD (length1, length2) { 
    if(length2 === 0) return length1
    return findGCD(length2, length1%length2)
 }