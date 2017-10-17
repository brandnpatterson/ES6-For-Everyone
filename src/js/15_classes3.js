class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
  add (movie) {
    this.push(movie);
  }
  showThis () {
    console.log(this);
  }
}

const movies = new MovieCollection('Wes\'s Fav Movies',
  { name: 'Bee Movie', stars: 10 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'King of the Road', stars: 8 }
);
