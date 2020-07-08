// every.js
//
// Implements a higher-order function that makes sure every element in an array
// passes the function; otherwise, returns false.  Two variations are offered--
// one that uses a loop and another that uses the some() higher-order function

// every() tests ever element in an array and only returns true if all elements
// test as true using testFunc
function every(array, testFunc) {
    for (let element of array) {
        if (!testFunc(element)) {
            return false
        }
    }
    return true
}

// everyAlt() is an alternate version of every() implemented using some()
function everyAlt(array, testFunc) {
    return !array.some(x => !testFunc(x))
}

// Original test cases from https://eloquentjavascript.net/code/#5.3

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everyAlt([1, 3, 5], n => n < 10));
// → true
console.log(everyAlt([2, 4, 16], n => n < 10));
// → false
console.log(everyAlt([], n => n < 10));
// → true

// Additional test cases
// None