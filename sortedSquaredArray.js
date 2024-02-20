// Algoexpert : https://www.algoexpert.io/questions/sorted-squared-array
// Leetcode: https://leetcode.com/problems/squares-of-a-sorted-array

function sortedSquaredArray(array) {
// what if this is a negative value like -1, -5 or 0?
 let s = 0
 let e = array.length -1 

 let returnArr = new Array(array.length).fill(0)

 for (let i = returnArr.length -1; i > -1; i-- ) {
    if(Math.abs(array[s]) > Math.abs(array[e])){
        returnArr[i] = array[s] * array[s]
        s++
    }else {
        returnArr[i] = array[e] * array[e]
        e--
    }
 }
 return returnArr
}