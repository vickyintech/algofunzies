// Algo expert tbd
// Leetcode https://leetcode.com/problems/minimum-penalty-for-a-shop/description/

function bestClosingTime (customers) {
   // prefix sum and postfix sum 
    // edge case when we at the end of the array 0<= j <=n 
    // Time complexity: O(N)
    // Space complexity: O(1)

    let beforeClosingTime = new Array(customers.length).fill(0)
    let atAndAfterClosingTime = new Array(customers.length).fill(0)
    
    // Calculate all the Ns before the closing time
    for(let i = 1; i<customers.length; i++) {
        beforeClosingTime[i] = beforeClosingTime[i-1]
        if(customers[i] === "N") {
         beforeClosingTime[i] ++  
        }
    }
    
    // Calculate all the Ys after the closing time
    for ( let i = customers.length - 1; i>=0; i--) {
        atAndAfterClosingTime[i] = atAndAfterClosingTime[i+1]
        if(customers[i] === "Y") {
            atAndAfterClosingTime[i] ++
        }
    }
    
    // Calculate the sum and then compare and find minimum 

    let bestTime = customers.length 
    let minPenalty = customers.length 

    for ( let i = 0; i<= customers.length; i ++) {
        let currentPenalty = null 
        if (i === customers.length) {
            currentPenalty = beforeClosingTime[i-1]
        } else {
            currentPenalty = beforeClosingTime[i]
            if(i>0) {
                currentPenalty += beforeClosingTime[i-1]
            }
        }
        
        beforeClosingTime[i] + atAndAfterClosingTime[i]
        if (currentPenalty < minPenalty) {
            bestTime = i
            minPenalty = currentPenalty
        }
    }

    return bestTime
};