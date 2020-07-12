// borrow.js 
//
// Illustrates how to use a function from another object against a specified
// object passing various arguments.

let map = { one: true, two: true, hasOwnProperty: true };

// This call won't work since map has a property named "hasOwnProperty" when we
// try to run the function 'hasOwnProperty' it has been overridden by the value
// of the same name and thus errors out
//console.log(map.hasOwnProperty("one"));

// Fixed call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true