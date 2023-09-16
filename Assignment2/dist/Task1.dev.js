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
// Solution:
function all(array, conditionFunction) {
  for (var i = 0; i < array.length; i++) {
    if (!conditionFunction(array[i])) {
      return false;
    }
  }

  return true;
}

function isValueLessThanNine(element) {
  return element < 9;
}

var array1 = [6, 5, 1, 5];
var array2 = [1, 1, 6, 9];
var array3 = [2, 1, 2, 9, 32, 3];
var result1 = all(array1, isValueLessThanNine);
var result2 = all(array2, isValueLessThanNine);
var result3 = all(array3, isValueLessThanNine);
console.log(result1); // true

console.log(result2); // false

console.log(result3); // false
//# sourceMappingURL=Task1.dev.js.map
