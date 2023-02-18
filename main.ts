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

console.log(shoppingSpree(wishlist)) // 10
