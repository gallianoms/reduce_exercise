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
console.log(strConcat(1, 2, 3, 4, 5)); // "12345"
