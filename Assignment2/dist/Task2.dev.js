"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 2. Write a function called contains that searches
// for a value in a nested object.It returns true if the object contains that value.
// Sample Object:
// var nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//             something: "foo2",
//           },
//         },
//       },
//     },
//   },
// };
// Solution:
function contains(obj, targetValue) {
  for (var key in obj) {
    if (obj[key] === targetValue) {
      return true;
    } // If the property's value is an object, recursively search inside it


    if (_typeof(obj[key]) === "object" && !Array.isArray(obj[key])) {
      if (contains(obj[key], targetValue)) {
        return true;
      }
    }
  }

  return false;
} // Sample Object


var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2"
          }
        }
      }
    }
  }
}; // Value to search for

var targetValue = 44;
var isContained = contains(nestedObject, targetValue);
console.log(isContained); // true,
//# sourceMappingURL=Task2.dev.js.map
