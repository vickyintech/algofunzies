/* Leetcode: https://leetcode.com/problems/daily-temperatures/

EX

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

*/

function dailyTemperatures(temperatures) { 
    const stack = [] // track in a 2d arrays [temperatures, index] 
    const res = new Array(temperatures.length).fill(0) 

    for (let i = 0; i < temperatures.length; i++) { 
        const t = temperatures[i]
        while (stack.length > 0 && t > stack[stack.length - 1][0]) { 
            const [stackTemp, stackIndex] = stack.pop()
            // update the res so it can calculate the distance
            res[stackIndex] = i - stackIndex
        }
        stack.push([t, i])
    }
    return res
}