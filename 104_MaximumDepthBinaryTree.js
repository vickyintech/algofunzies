// Leetcode : https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Recursive depth first search 

function maxDepth (root) {
   if(root === null) {
    return 0
   }else {
    return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
   }
};