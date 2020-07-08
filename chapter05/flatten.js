// flatten.js
//
// Takes an array of arrays and flattens them into a single array containing all
// the elements of the original arrays

// flatten.js takes an arrayOfArrays and returns a new array containing all the
// elements of the original arrays
function flatten(arrayOfArrays) {
    if (arrayOfArrays.length == 0) {
        return []
    }
    return arrayOfArrays.reduce((accumulator, nextElement) => accumulator.concat(nextElement))
}

// Original test cases from https://eloquentjavascript.net/code/#5.1
console.log(flatten([
    [1, 2, 3],
    [4, 5],
    [6]
]));
// → [1, 2, 3, 4, 5, 6]

console.log(flatten([
    [1, 2, 3],
    [4, ['A', 'B', 'C'], 5],
    [6]
]));
// → [ 1, 2, 3, 4, [ 'A', 'B', 'C' ], 5, 6 ]

console.log(flatten([]));
// → []