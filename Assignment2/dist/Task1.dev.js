"use strict";

// 1. Write a function called all which accepts an array and a
//  callback and returns true if every value in the array returns true
//   when passed as a parameter to the callback function.
// Sample:
// var allAreLessThanSeven = all([1, 2, 9], function (num) {
//   return num < 7;
// });
// console.log(allAreLessThanSeven); // false
// I have provided a solution for the problem you mentioned. However,
// keep in mind that there are multiple ways to solve it, and the solution I
//  provided is just one approach
function checkCondition(array, conditionFunction) {
  return array.every(function (element) {
    return conditionFunction(element);
  });
}

function isValueLessThanTen(element) {
  return element < 10;
}

var array1 = [2, 5, 6, 7, 8, 9];
var array2 = [21, 1, 2, 9];
var array3 = [2, 1, 24, 8, 2, 9];
var result1 = checkCondition(array1, isValueLessThanTen);
var result2 = checkCondition(array2, isValueLessThanTen);
var result3 = checkCondition(array3, isValueLessThanTen);
console.log(result1); // true

console.log(result2); // true

console.log(result3); // false
//# sourceMappingURL=Task1.dev.js.map
