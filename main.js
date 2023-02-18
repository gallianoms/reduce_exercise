"use strict";
exports.__esModule = true;
//* Exercise 1
//* Return max of two numbers
var max = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return Math.max(acc, num); });
};
// console.log(max(1, 2, 3, 4, 5)) // 5
//* Exercise 2
//* Convert array to flat array
var arr = [1, [2], [3, 4, 5]];
var flatArr = function (arr) {
    return arr.reduce(function (acc, item) { return acc.concat(item); }, []);
};
// console.log(flatArr(arr)) // [1, 2, 3, 4, 5]
//* Exercise 3
//* Turn an array of numbers into a long string of all those numbers.
var strConcat = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc.concat(num.toString()); }, '');
};
// console.log(strConcat(1, 2, 3, 4, 5)) // "12345"
//* Exercise 4
//* Turn an array of voter objects into a count of how many people voted
var voters = [
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
];
var totalVotes = function (voters) {
    return voters
        .filter(function (voter) { return voter.voted === true; })
        .reduce(function (acc, voter) { return (acc += 1); }, 0);
};
// console.log(totalVotes(voters)) // 7
//* Exercise 5
//* Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
    { title: 'title1', price: 1 },
    { title: 'title2', price: 2 },
    { title: 'title3', price: 3 },
    { title: 'title4', price: 4 },
];
var shoppingSpree = function (wishlist) {
    return wishlist.reduce(function (acc, item) { return acc + item.price; }, 0);
};
console.log(shoppingSpree(wishlist)); // 10
