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

console.log(voterResults(arrVoters))
// {
//  numYoungVotes: 1
//  numYoungPeople: 4
//  numMidVotesPeople: 3
//  numMidsPeople: 4
//  numOldVotesPeople: 3
//  numOldsPeople: 4
// }
