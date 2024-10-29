// Leetcode: https://leetcode.com/problems/balanced-binary-tree/
// Use [ ] to keep track of height and isNodeBlanced true/false 

function isBalanced(root) { 

    return dfs(root)[0]
    
    const dfs = (node) => { 
        if (node === null) return [true, 0] // return [balanced?, height]
        const left = dfs(node.left)
        const right = dfs(node.right)

        const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1
        const height = 1+ Math.max(right[1], left[1])
        return [balanced, height]
    }
}
