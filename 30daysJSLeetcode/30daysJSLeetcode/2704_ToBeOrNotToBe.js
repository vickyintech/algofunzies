// Leetcode: https://leetcode.com/problems/to-be-or-not-to-be/description/

// Solve it with functions 

function expect (val) { 
    return {
        toBe: (val2) => { 
            if (val !== val2) { 
                throw new Error ('Not Equal')
            }
            return true
        },
        notToBe: (val2) => {
            if (val === val2) { 
                throw new Error('Equal')
            }
            return true
         },
    }

}

// Solve it with class 

class Expect { 
    constructor(val) { 
        this.val = val
    }
    toBe(val2) {
        if (this.val !== val2) { 
                throw new Error ('Not Equal')
            }
            return true
     }
    notToBe(val2) { 
        if (this.val === val2) { 
                throw new Error('Equal')
            }
            return true
    }
}

// Run function return an new incident 

function expect(val) { 
    return new Expect(val)
}