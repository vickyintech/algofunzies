// Leetcode: https://leetcode.com/problems/last-stone-weight/


function lastStoneWeight(stones) {
    //use a max heap to solve this 
    // Create a MaxPriorityQueue

    const queue = new MaxPriorityQueue()

    for (const stone of stones) { queue.enqueue(stone) }

    while (queue.size() > 1) { 
        let comp1 = queue.dequeue().element
        let comp2 = queue.dequeue().element

        if (comp1 !== comp2) { 
            queue.enqueue(comp1-comp2) 
        }
    }
    return queue.size() === 1? queue.front().element :0 
}