// loop.js
//
// Implements a custom loop as a higher-level function

// NOTE:  The official solution Haverbeke provides utilizes a for loop and is
// one line shorter than the solution I first created

// loop.js is passed a value and three functions: test, update, and body.  It
// then tests the value with the test function and stops if the test is false.
// If not false, then the body is passed the value. Then the update function 
// is called to create a new value and the loop starts again.
function loop(value, testFunc, updateFunc, bodyFunc) {
    while (testFunc(value)) {
        bodyFunc(value)
        value = updateFunc(value)
    }
}

// Original test cases from https://eloquentjavascript.net/code/#5.2

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Additional test cases
// This test case should do nothing
loop(0, n => n > 0, n => n - 1, console.log);
// nothing