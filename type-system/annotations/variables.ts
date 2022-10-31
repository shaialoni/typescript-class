// let age = 3

let firstName: string = 'john'
let isMarried: boolean = false

let noValue: null = null

let notAssigned: undefined = undefined

let today: Date = new Date()

//**************//

let planets: string[] = [ 'Earth', 'Mars', 'Juputer', 'Saturn']
let luckyNumbers: number[] = [3,5,7]
let completed: boolean[] = [false, true, false, false]

//Classes
class Phone{}
let phone: Phone = new Phone()

// Object literal
let product: {name: string, price: number} = {
    name: 'pen',
    price: 15
}

//**Functions**//
const printer:(content: string) => void = (content: string) => {
    console.log(content)
}

//Functions that return the 'any' type

const place = '{"lat": 45, "lon": -70}'
const newLocation: {lat: number, lon: number} = JSON.parse(place)
console.log(newLocation) // {"lat": 45, "lon": -70}

//Initialize variable later

const forecast = ['sunny', 'rain', 'wind', 'cloudy']

let isSunny: boolean

for (let i = 0; i < forecast.length; i++){
    if (forecast[i] === 'sunny'){
        isSunny = true
    }
}

//Type cannot be infered corerctly
let temperatures = [8,5,-2]
let subzero: boolean | number = false

for (let i = 0; i < temperatures.length; i++){
    if (temperatures[i] < 0){
        subzero = temperatures[i]
    }
}
