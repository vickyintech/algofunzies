// Leetcode: https://leetcode.com/problems/invert-binary-tree/description/

function TreeNode(val, left, right) { 
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined? null: left)
    this.right = (right === undefined? null: right)
}

function invertTree(root) { 
    if (root === null) return null
    const node = new TreeNode(root.val)
    node.left = this.invertTree(root.right)
    node.right = this.invertTree(root.left)
    return node
}