// Leetcode: https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

// Input:
// ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

// Output:
// [null, 3, 3, 3, 5, 6]

/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue()
        this.k = k

        for (const num of nums) { 
            this.minHeap.enqueue(num)
        }

        while (this.minHeap.size() > k) { 
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val)
        if (this.minHeap.size() > k) { 
            this.minHeap.dequeue()
        }
        
        return this.minHeap.front()
    }
}