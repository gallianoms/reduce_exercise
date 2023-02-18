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
console.log(max(1, 2, 3, 4, 5)); // 5
