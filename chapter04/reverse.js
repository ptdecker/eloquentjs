// reverse.js
//
// Reverse the order of the elements in an array

// reverseArray() reverses the order of elements in an array
// This function creates a new array in the process
function reverseArray(array = []) {
    var newArray = [];
    for (let val of array) {
        newArray.unshift(val);
    }
    return newArray;
}

// reverseArrayInPlace reverses the order of elemens in an array
// This function modifies the original array passed to the function
function reverseArrayInPlace(array = []) {
    for (let x = 0, y = array.length - 1; x < y; x++, y--) {
        let temp = array[x];
        array[x] = array[y];
        array[y] = temp
    }
    return array;
}

// Official test cases from https://eloquentjavascript.net/code/#4.2

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// Additional test cases
console.log(reverseArray(["A", "B"]));
// → ["B", "A"]
console.log(reverseArrayInPlace(["A", "B"]));
// → ["B", "A"]
console.log(reverseArray([]));
// → []
console.log(reverseArrayInPlace([]));
// → []
console.log(reverseArray());
// → []
console.log(reverseArrayInPlace());
// → []
console.log(reverseArray([
    [1, 2, 3],
    ["A", "B"]
]));
// → [["A", "B"], [1, 2, 3]]
console.log(reverseArrayInPlace([
    [1, 2, 3],
    ["A", "B"]
]));
// → [["A", "B"], [1, 2, 3]]