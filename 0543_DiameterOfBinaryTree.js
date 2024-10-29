// Leetcode: https://leetcode.com/problems/diameter-of-binary-tree/description/

function diameterOfBS(root) { 
    // initialized an array to keep track of diameters
    const counter = [0]
    
    const dfs = (node, counter) => { 
        if (node === null) return 0
        const left = dfs(node.left, counter)
        const right = dfs(node.right, counter)

        counter[0] = Math.max(counter, left + right)
        return 1+ Math.max(left, right)
    }
    
    dfs(root, counter)
    return counter[0]

}