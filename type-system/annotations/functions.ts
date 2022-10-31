const multiply = (x: number, y: number): number => {
    return x*y
}

const divide = (x: number, y: number): number => {
    return x/y
}

function sum(x: number, y: number): number {
    return x + y
}

const subtract = function (x: number, y: number): number {
    return x-y
}

const sprinter = (content: string): void => {
    console.log(content)
}

const throwError = (content:string): never => {
    throw new Error(content)
}

const earthquake = {
    date: new Date(),
    velocity: 4.5
}

// const logVelocity = (earthquake:{date: Date, velocity: number}): void => {
//     console.log(earthquake.date)
//     console.log(earthquake.velocity)
// }

//ES2015
const logVelocity=({date, velocity}: {date: Date, velocity: number}): void => {
    console.log(date)
    console.log(velocity)
}

logVelocity(earthquake)
