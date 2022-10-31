interface Detail {
//   title: string;
//   date: Date;
//   rating: number;
//   genre: string[];

  report(): string;
}

const currentMovie = {
  title: "Dune",
  date: new Date(2021, 9, 24),
  rating: 8.2,
  genre: ["action", "adventure", "drama"],

  report(): string{
    return `Title: ${this.title}`
  }
};

const track = {
    genre: 'rock',
    exclusive: true,
    duration: 120,

    report():string{
        return `Current song: ${this.genre}`
    }
}

const badMovie = {
  title: 12,
  date: "November",
};
// const logMovie = (movie: {
//     title: string,
//     date: Date,
//     rating: number,
//     genre:string[]
// }): void => {
//     console.log(`Title: ${movie.title}`)
//     console.log(`Release Date: ${movie.date}`)
//     console.log(`Rating: ${movie.rating}`)
//     console.log(`Genre: ${movie.genre.join(', ')}`)
// }

const logDetail = (item: Detail): void => {
  // annotate using interface
  console.log(item.report())
};

logDetail(currentMovie);
//logMovie(badMovie); // badMovie doesnt fit in the interface setup
logDetail(track)