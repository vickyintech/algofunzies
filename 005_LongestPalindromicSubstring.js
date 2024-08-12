// Leetcode: https://leetcode.com/problems/longest-palindromic-substring/description/

function isAnagram(s, t) { 
    if (s.length !== t.length) return false 
    let counterS = {}, counterT = {}
    
    for (let i = 0; i < s.length; i++) {
        counterS[s[i]] = 1 + (counterS[s[i]] || 0)
        counterT[t[i]] = 1 + (counterT[t[i]] || 0)
    }

    for (const key in counterS) { 
        if(couterS[key] !== counterT[key]) return false
    }
    return true
}