// Algo expert https://www.algoexpert.io/questions/node-depths
// Leetcode https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

//Input: root = [3,9,20,null,null,15,7]
//Output: 3

// Input: root = [1,null,2]
// Output: 2

// Use depth first search
// Time O(n) Space O(n)

function maxDepth (root) {
    if(root === null) return 0
    return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
}

// solve it with class 

class TreeNode { 
    constructor(val, left, right) { 
        this.val = val
        this.left = left
        this.right = right
    }
    maxDepth(root) {
        if (root === null) return 0  
        return 1+ Math.max(maxDepth(root.right), maxDepth(root.left))
    }
}
