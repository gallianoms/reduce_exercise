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

console.log(strConcat(1, 2, 3, 4, 5)) // "12345"
