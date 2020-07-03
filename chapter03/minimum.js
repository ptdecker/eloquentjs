// minimum.js
//
// Implements a minimal implementation of the Math.min function

// min() compates 'x' to 'y' and returns the minimum value
function min(x, y) {
    return (x < y) ? x : y;
}

// Official test cases from https://eloquentjavascript.net/code/#3.1

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Additional test cases

console.log(min(1, 1));
// → 1

// NOTE: min() could be extended to find the minimum of as many numbers as are
// passed to the function by using the rest parameter introduced in chapter 4