// Leetcode : https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
/*

the difficult part is the edge cases 
such as [0, 0 , 1]

eg: Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true

    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false

Utilize 3 pointers: previous, current ( i ), and next.

    If the plots at positions previous, current, and next are all 0, a flower can be placed, leading to an increment in the counter.
    If the previous and next pointers fall outside the array, they are treated as 0.
    If count >= n, it signifies that flowers can be placed.

TIME COMPLEXITY O(N)

*/

function canPlaceFlowers (flowerbed, n) {
    let count = 0
    let pre = -1
    let next = 1 

    for (let i = 0; i<flowerbed.length; i++, pre++, next++) {
        if( (getValue(flowerbed, pre) + getValue(flowerbed, i)+ getValue(flowerbed, next) === 0)) {
            flowerbed[i] = 1
            count ++
        }
    }
    return count >= n
}

// Take care of the outer bound edge cases
function getValue(flowerbed, i) {
    if(i<0 || i>=flowerbed.length) {
        return 0
    }
    return flowerbed[i]
}