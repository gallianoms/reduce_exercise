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
// console.log(shoppingSpree(wishlist)) // 10
//* Exercise 6
//* Given an array of potential voters, return an object representing the results of the vote
//* Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
var arrVoters = [
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
var voterResults = function (arrVoters) {
    var numYoungVotes = 0;
    var numYoungPeople = 0;
    var numMidVotesPeople = 0;
    var numMidsPeople = 0;
    var numOldVotesPeople = 0;
    var numOldsPeople = 0;
    return arrVoters.reduce(function (acc, voter) {
        if (voter.age >= 18 && voter.age <= 25 && voter.voted === true) {
            numYoungVotes += 1;
        }
        if (voter.age >= 18 && voter.age <= 25) {
            numYoungPeople += 1;
        }
        if (voter.age >= 26 && voter.age <= 35 && voter.voted === true) {
            numMidVotesPeople += 1;
        }
        if (voter.age >= 26 && voter.age <= 35) {
            numMidsPeople += 1;
        }
        if (voter.age >= 36 && voter.age <= 55 && voter.voted === true) {
            numOldVotesPeople += 1;
        }
        if (voter.age >= 36 && voter.age <= 55) {
            numOldsPeople += 1;
        }
        return (acc = {
            numYoungVotes: numYoungVotes,
            numYoungPeople: numYoungPeople,
            numMidVotesPeople: numMidVotesPeople,
            numMidsPeople: numMidsPeople,
            numOldVotesPeople: numOldVotesPeople,
            numOldsPeople: numOldsPeople
        });
    }, {});
};
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
var people = [
    { name: 'Cristina', age: 25, sex: 'W' },
    { name: 'Ana', age: 20, sex: 'W' },
    { name: 'Fernando', age: 15, sex: 'M' },
    { name: 'Alejandra', age: 11, sex: 'W' },
];
var toObj = function (people) {
    return people.reduce(function (acc, pe) {
        acc[pe.name] = {
            age: pe.age,
            sex: pe.sex
        };
        return acc;
    }, {});
};
console.log(toObj(people));
// {
//   Cristina: {age: 25, sex: 'W'},
//   Ana: {age: 20, sex: 'W'},
//   Fernando: {age: 15, sex: 'M'},
//   Alejandra: {age: 11, sex: 'W'},
// }
