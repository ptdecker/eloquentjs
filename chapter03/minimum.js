// minimum.js
//
// Implements a minimal implementation of the Math.min function

function min(x, y) {
    return (x < y) ? x : y;
}

console.log(`The minimum of '1' and '2' is ${min(1, 2)}`);
console.log(`The minimum of '2' and '1' is ${min(2, 1)}`);
console.log(`The minimum of '1' and '1' is ${min(1, 1)}`);