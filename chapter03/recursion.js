// recursion.js
//
// Defines an isEven function that returns true if a number is even that is
// implemented using recurrsion.

// isEven() returns boolean true if 'x' is an even number
function isEven(x) {
    if (x < 0) x *= -1;
    if (x == 0) return true;
    if (x == 1) return false;
    return isEven(x - 2);
}

// Official test cases from https://eloquentjavascript.net/code/#3.2

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ?? (true)