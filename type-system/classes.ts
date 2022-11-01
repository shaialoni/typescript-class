class Employee {
    startShift(): void {
        console.log('Employee start to shift')
    }

    endShift(): void {
        console.log('Shift has ended')
    }
}

class Mechanic extends Employee {
    startShift(): void {
        console.log('Mechanic start to shift')
    }
}

// const employee = new Employee()
// employee.startShift()
// employee.endShift()

const mechanic = new Mechanic()
mechanic.startShift()
mechanic.endShift()