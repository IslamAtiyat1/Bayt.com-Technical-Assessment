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
  for (const key in obj) {
    if (obj[key] === targetValue) {
      return true;
    }
    // If the property's value is an object, recursively search inside it
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      if (contains(obj[key], targetValue)) {
        return true;
      }
    }
  }
  return false;
}

// Sample Object
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// Value to search for
var targetValue = 44;

var isContained = contains(nestedObject, targetValue);

console.log(isContained); // true,
