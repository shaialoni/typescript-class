const track = {
    genre: 'rock',
    exclusive: false,
    duration: 120
}


// makes sure to keep the types in their place
const track1: [string, boolean, number] = ['rock', false, 120]

type Track = [string, boolean, number]
const track2: Track = ['hip-hop', true, 130]

const currenciesToDollar: [number, number] = [1.3, 1.16]

const currencies2Dollar = {
    sterling: 1.38,
    euro: 1.16
}