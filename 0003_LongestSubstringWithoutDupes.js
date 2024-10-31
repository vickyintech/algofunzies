// Leetcode: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Using sliding window and set to keep track of dupes

function lengthOfLongestString(s) { 
    let left = 0, tracker = new Set(), ans = 0
    
    for (let right = 0; right < s.length; right++) { 
        while (tracker.has(s[right])) { 
            tracker.delete(s[left])
            left ++
        }
        tracker.add(s[right])
        ans = Math.max(ans, right - left +1)
    }
    
    return ans
}