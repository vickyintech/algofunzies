// Leetcode : https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

// input s = "the sky is blue"
// output "blue is sky the"

// TIME AND SPACE O(N)

function reverseWords (s) {
    let words = s.split(' ')
    let ans = ''
    for (let i = words.length -1; i >=0; i--) {
        if(words[i]) {
            ans += (ans? ' ' :'') + words[i]
        }
    }
    return ans
}

// Using built in JS functions , still TIME AND SPACE O(N)

function reverseWords (s) {
    return s.trim().split(' ').filter(w=> w !== '').reverse().join(' ')
}
