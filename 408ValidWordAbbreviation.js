// Algo expert tbd
// Leetcode https://leetcode.com/problems/valid-word-abbreviation/description/


function validWordAbbreviation (word, abbr) {
    // This question is very confusing, and I don't think this solution is graceful, however, I could not think of another better way to resolve this. if you do, I would encourage you to create a pull request

    let i = 0 // index for word
    let j = 0 // index for abbr

    while (i<word.length && j<abbr.length) {
        const wordChar = word.charAt(i)
        const abbrNum = parseInt(abb.substring(j)) // I don't like this way to using parseInt

        if(abbrNum === 0) {
            return false
        }else if (Number.isInteger(abbrNum)) {
            i+= abbrNum
            j+= String(abbrNum).length
        }else {
            const abbrChar = abb.charAt(j)
            if(wordChar !== abbrChar) { return false}
            i++
        }
    }
    return i=== word.length && j== abbr.length
}