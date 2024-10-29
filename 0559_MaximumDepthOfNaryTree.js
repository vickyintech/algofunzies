/**

* Algo expert similar: https://www.algoexpert.io/questions/depth-first-search
* Leetcode https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/

 function Node(val,children) {
   this.val = val;
   this.children = children;
  }

Input: root = [1,null,3,2,4,null,5,6]
Output: 3

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5

Use depth first search + recursion

*/

function maxDepth (root) {
    if(!root) return 0
    let depth = 0
    for (let child of root.children) {
        depth = Math.max(depth, maxDepth(child))
    }
    return depth+1
}