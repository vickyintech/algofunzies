// Leetcode: https://leetcode.com/problems/same-tree/description/

function sameTree(p, q) { 
    // check value and check stucture 
    if (p === null && q === null) return true
    
    if (p.value === q.value && p && q) {
        return (
            // use dfs method to check the strucutre of both trees
            sameTree(p.left, q.left) && sameTree(p.right, q.right)
        )
    }
    // if else, the trees are not equal
    return false
}
 