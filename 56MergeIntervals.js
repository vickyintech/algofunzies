// Leetcode https://leetcode.com/problems/merge-intervals/description/
// AlgoExpert https://www.algoexpert.io/questions/merge-overlapping-intervals

/*

Make sure the intervals are sorted 
sorted by the start position  -> nlog (n)
Check to see if end 1 >= start 2 then that means they are overlap, otherwise, no overlap

eg intervals = [[1,3],[2,6],[8,10],[15,18]]
return [[1,6],[8,10],[15,18]]

*/

function merge(intervals) {
    let sortedIntervals = intervals.sort((a,b)=> a[0]- b[0])
    let result = []
    let currentInterval = sortedIntervals[0]
    result.push[currentInterval]

   for (let i = 1; i<sortedIntervals.length; i++) {
    let [currentStart, currentEnd] = currentInterval
    let [nextStart, nextEnd] = sortedIntervals[i]

    if(currentEnd >= nextStart) {
        currentInterval = [currentStart, Math.max(currentEnd, nextEnd)]
    }else {
        currentInterval = sortedIntervals[i]
        result.push(currentInterval)
    }
   }
    return result
}