// Leetcode: https://leetcode.com/problems/valid-anagram/

// Input: s = "anagram", t = "nagaram"
// Output: true


function isAnagram(s, t) { 
    if (s.length !== t.length) return false

    let trackerS = {}
    let trackerT = {}

    for (let i = 0; i < s.length; i++) { 
        if (!trackerS[s[i]]) {
            trackerS[s[i]] = 1
            trackerT[s[i]] = 1
        } else { 
            trackerS[s[i]] ++
            trackerT[s[i]] ++
        }
    }

    for (let key in trackerS) { 
        if(trackerS[key] !== trackerT[key]) return false
    }
    return true
}


// Add in sorting algo

function isAnagram(s, t) { 
   if (s.length !== t.length) return false
   return s.split('').sort().join('') === t.split('').sort().join('');
}