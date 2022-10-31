const  favoriteShows: string[] = ['friends', 'The Office', 'Breaking Bad']
const dates = [new Date(), new Date()]

const meals: string[][] = [['breakfast'], ['lunch'], ['dinner']]

// Help with infrence
const office = favoriteShows[1]
const lastKnown = favoriteShows.pop()

//Prevent incompatible values
favoriteShows.push(100) 

// Help with methods

favoriteShows.map((show:string): string => {
    return show.concat()
})

// Arrays have multiple types
const holidays: (Date | string)[] = [new Date()]
holidays.push('2022-01-01')
holidays.push(new Date())