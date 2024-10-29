// leetcode: https://leetcode.com/problems/apply-transform-over-each-element-in-array

function map(arr, fn) {
    const res = new Array(arr.length)

    for (const i in arr) { 
        res[i] = fn(arr[i], Number(i))
    }

    return res
}
 

function map(arr, fn) { 
    const mappedArray = []
    for (let i = 0; i < arr.length; i++) { 
        mappedArray.push(fn([arr[i], i ]))
    }
    return mappedArray
}