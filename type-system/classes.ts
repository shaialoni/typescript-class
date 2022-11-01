class Employee {
    constructor(public age: number) {}
    
    protected endShift(): void {
        console.log('Shift has ended')
    }
}

const employee = new Employee(29)
console.log(employee.age)

class Mechanic extends Employee {
    constructor(public name: string, age: number) {
        super(age)
    }
    
    private startShift(): void {
        console.log('Mechanic started to shift')
    }

    goToWork(): void {
        this.startShift()
        this.endShift()
    }
}

// const employee = new Employee()
// employee.startShift()
// employee.endShift()

const mechanic = new Mechanic('James', 30)
mechanic.goToWork()
// mechanic.endShift()