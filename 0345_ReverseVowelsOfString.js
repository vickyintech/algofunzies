// Leetcode :https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Input: s = "hello"
// Output: "holle"

function reverseVowels(s) {
    const vowels = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"]) 
    // remembered to include upper and lower casing

    let start = 0, end = s.length -1 
    let ans = [...s]

    while(start < end) {
        
        if(vowels.has(ans[start]) && vowels.has(ans[end])) {
            let temp = ans[start]
            ans[start] = ans[end]
            ans[end] = temp
            start++
            end--
        }
        
        if(!vowels.has(ans[start])){start++}
        if(!vowels.has(ans[end])) {
            end--
        }
            
    }

    return ans.join('')
}