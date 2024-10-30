// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

function findKthLargest(nums, k) { 
    // Create a maxHeap
    const maxQueue = new MaxPirorityQueue()
    // Add numbers to the heap
    nums.forEach(num => maxQueue.enqueue(num));
    while (k > 1) { 
        maxQueue.dequeue()
        k--
    }
    return maxQueue.dequeue()
}