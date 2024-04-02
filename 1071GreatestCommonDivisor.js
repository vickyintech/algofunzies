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


/* Another solution 

CASE 1  string 1 + string 2 = string 2 + string 1
CASE 2  string1 === string2
CASE 3  string 1 > string 2 or string 2 > string 1

"ABABAB"  "ABAB"
"AB" "ABAB" 
return "AB"

*/

function gcdOfStrings (string1, string2) {
    if(str1 + str2 !== str2 + str1 ) {
        return ''
    } else if (str1 === str2) { 
        return str1 
    }
    else if (str1.length > str2.length) {
        return gcdOfStrings( str1.substr(str2.length), str2)
    } else {
        return gcdOfStrings( str2.substr(str1.length), str1)
    }
}