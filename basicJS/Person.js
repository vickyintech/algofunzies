// Define a class called Person

class person { 
    constructor(name, age) { 
        this.name = name 
        this.age = age
    }
    getInfo() { 
        return `${this.name} is ${this.age} years old`
    }

    getAge() { 
        return this.age
    }

    set Age(newAge) { 
        newAge >= 0? this.age = newAge : console.error('Age cannot be negative')
    }
}

//Create an instance of the person class 

const personOne = new person('john', 30)

personOne.name 
personOne.age
person.getAge()

personOne.Age = 31
personOne.Age = -1


