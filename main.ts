export {}

//* Exercise 1
//* Return max of two numbers
const max = (...numbers: number[]): number => {
  return numbers.reduce((acc, num) => Math.max(acc, num))
}

console.log(max(1, 2, 3, 4, 5)) // 5
