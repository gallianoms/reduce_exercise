export {}

//* Exercise 1
//* Return max of two numbers
const max = (...numbers: number[]): number => {
  return numbers.reduce((acc, num) => Math.max(acc, num))
}

// console.log(max(1, 2, 3, 4, 5)) // 5

//* Exercise 2
//* Convert array to flat array
const arr = [1, [2], [3, 4, 5]]

const flatArr = arr => {
  return arr.reduce((acc, item) => acc.concat(item), [])
}

// console.log(flatArr(arr)) // [1, 2, 3, 4, 5]

//* Exercise 3
//* Turn an array of numbers into a long string of all those numbers.
const strConcat = (...numbers: number[]): string => {
  return numbers.reduce((acc, num) => acc.concat(num.toString()), '')
}

// console.log(strConcat(1, 2, 3, 4, 5)) // "12345"

//* Exercise 4
//* Turn an array of voter objects into a count of how many people voted
const voters: Vote[] = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
]

interface Vote {
  name: string
  age: number
  voted: boolean
}

const totalVotes = (voters: Vote[]) => {
  return voters
    .filter(voter => voter.voted === true)
    .reduce((acc, voter) => (acc += 1), 0)
}

// console.log(totalVotes(voters)) // 7

//* Exercise 5
//* Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
const wishlist: Wishlist[] = [
  { title: 'title1', price: 1 },
  { title: 'title2', price: 2 },
  { title: 'title3', price: 3 },
  { title: 'title4', price: 4 },
]

interface Wishlist {
  title: string
  price: number
}

const shoppingSpree = (wishlist: Wishlist[]) => {
  return wishlist.reduce((acc, item) => acc + item.price, 0)
}

// console.log(shoppingSpree(wishlist)) // 10

//* Exercise 6
//* Given an array of potential voters, return an object representing the results of the vote
//* Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var arrVoters: Vote[] = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
]

interface Result {
  numYoungVotes: number
  numYoungPeople: number
  numMidVotesPeople: number
  numMidsPeople: number
  numOldVotesPeople: number
  numOldsPeople: number
}

const voterResults = (arrVoters: Vote[]) => {
  let numYoungVotes: number = 0
  let numYoungPeople: number = 0

  let numMidVotesPeople: number = 0
  let numMidsPeople: number = 0

  let numOldVotesPeople: number = 0
  let numOldsPeople: number = 0

  return arrVoters.reduce((acc, voter): Result => {
    if (voter.age >= 18 && voter.age <= 25 && voter.voted === true) {
      numYoungVotes += 1
    }
    if (voter.age >= 18 && voter.age <= 25) {
      numYoungPeople += 1
    }
    if (voter.age >= 26 && voter.age <= 35 && voter.voted === true) {
      numMidVotesPeople += 1
    }
    if (voter.age >= 26 && voter.age <= 35) {
      numMidsPeople += 1
    }
    if (voter.age >= 36 && voter.age <= 55 && voter.voted === true) {
      numOldVotesPeople += 1
    }
    if (voter.age >= 36 && voter.age <= 55) {
      numOldsPeople += 1
    }

    return (acc = {
      numYoungVotes,
      numYoungPeople,
      numMidVotesPeople,
      numMidsPeople,
      numOldVotesPeople,
      numOldsPeople,
    })
  }, {})
}

// console.log(voterResults(arrVoters))
// {
//  numYoungVotes: 1
//  numYoungPeople: 4
//  numMidVotesPeople: 3
//  numMidsPeople: 4
//  numOldVotesPeople: 3
//  numOldsPeople: 4
// }

//* Exercise 7
//* Convert arrays to objects

const people: People[] = [
  { name: 'Cristina', age: 25, sex: 'W' },
  { name: 'Ana', age: 20, sex: 'W' },
  { name: 'Fernando', age: 15, sex: 'M' },
  { name: 'Alejandra', age: 11, sex: 'W' },
]

interface People {
  name: string
  age: number
  sex: string
}

const toObj = (people: People[]) => {
  return people.reduce((acc, pe) => {
    acc[pe.name] = {
      age: pe.age,
      sex: pe.sex,
    }
    return acc
  }, {})
}

// console.log(toObj(people))
// {
//   Cristina: {age: 25, sex: 'W'},
//   Ana: {age: 20, sex: 'W'},
//   Fernando: {age: 15, sex: 'M'},
//   Alejandra: {age: 11, sex: 'W'},
// }

//* Exercise 8
//* Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least

const citiesList: string[] = [
  'nashville',
  'nashville',
  'los angeles',
  'nashville',
  'memphis',
  'barcelona',
  'los angeles',
  'sevilla',
  'madrid',
  'canary islands',
  'barcelona',
  'madrid',
  'nashville',
  'barcelona',
  'london',
  'berlin',
  'madrid',
  'nashville',
  'london',
  'madrid',
]

const logCities = (list: string[], num: number = 5) => {
  const cities = list.reduce((acc, city) => {
    acc[city] = (acc[city] ?? 0) + 1
    return acc
  }, {})

  return Object.entries(cities)
    .sort((a: unknown, b: unknown) => b[1] - a[1])
    .slice(0, 5)
    .map(city => city[0])
}

// console.log(logCities(citiesList))
//* [ 'nashville', 'madrid', 'barcelona', 'los angeles', 'london' ]

//* Exercise 9
//* La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.

interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  Response: string
}

const watchList: Movie[] = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
]

const getRating = (watchList: Movie[]) => {
  return watchList
    .filter(movie => movie.Director === 'Christopher Nolan')
    .reduce((acc, movie, idx, array) => {
      return acc + parseFloat(movie.imdbRating) / array.length
    }, 0)
}

console.log(getRating(watchList)) //8.675
