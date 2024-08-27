// Leetcode: https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solve it with closure 

function createCounter (init) {
    let currentVal = init
    return {
        increment : () => { return currentVal +=1 },
        decrement : () => { return currentVal -=1 },
        reset: ()=>{ return currentVal = init }
    }
};


// Solve it with Class 

class Counter { 
    constructor(init) { 
        this.init = init
        this.currentVal = init
    }
    increment() {
        return this.currentVal++ 
     }
    decrement() { 
        return this.currentVal --
    }
    reset() { 
        this.currentVal = this.init
        return this.currentVal
    }
}

function createCounter(init) { 
    return new Counter(init)
}
