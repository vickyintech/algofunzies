// Leetcode: https://leetcode.com/problems/invert-binary-tree/description/

// Use recursion with depth first search

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

// Resolve it with a class

class TreeNode { 
    constructor(value, left, right)  { 
        this.value = value
        this.left = left
        this.right = right 
    }
}

class solution { 
    invertTree(root) { 
        if (root === null) return null
        let node = new TreeNode(root.value)
        node.left = invertTree(root.right)
        node.right = invertTree(root.left)
        return node 
    }
}