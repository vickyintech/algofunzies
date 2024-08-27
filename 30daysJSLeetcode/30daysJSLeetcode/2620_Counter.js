// Leetcode: https://leetcode.com/problems/counter/?

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) { 
    return function () { 
        return n++
    }
}

// Let's try it with classes

class Counter { 
    constructor(n) { 
        this.n = n
    }
    increment() { 
        return this.n++
    }
}

const counter = Counter(10)
counter.increment()

