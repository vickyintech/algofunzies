//https://leetcode.com/problems/string-matching-in-an-array/

 //words = ["mass","as","hero","superhero"]
 //Output: ["as","hero"]
// brute force solutin
// Time O(N*2) Space O(N)

function stringMatching (words) {
    let res = new Set()
        for(let i = 0; i<words.length; i++) {
            for(let j=0; j<words.length; j++) {
                console.log(words[i])
                console.log(words[j])
                if(words[i] !== words[j] && words[i].includes(words[j])){
                    res.add(words[j])
                }
            }
        }
        return Array.from([...res])
}

function stringMatching (words) {
    return words.filter( n => words.some( el=> el !== word && el.includes(word)))
}

function stringMatching(words) {
    
}