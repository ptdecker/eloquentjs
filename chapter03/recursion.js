// recursion.js
//
// Defines an isEven function that returns true if a number is even that is
// implemented using recurrsion.

function isEven(x) {
    if (x < 0) x *= -1;
    if (x == 0) return true;
    if (x == 1) return false;
    return isEven(x - 2);
}

console.log(`'50' is ${isEven(50) ? "even" : "odd"}`);
console.log(`'75' is ${isEven(75) ? "even" : "odd"}`);
console.log(`'-1' is ${isEven(-1) ? "even" : "odd"}`);