// list.js
//
// Provides functions that build a list structure from an array and  also an
// array from a list.  Also provides two helper functions, prepend() and nth(),
// that adds elements to the front o a list and returns an element from a
// specific position.

// prepend returns a list with element prepended to it as the first item
function prepend(element, list) {
    return { value: element, rest: list }
}

// arrayToList returns a list built out of the array passed to it
function arrayToList(array = []) {
    let list = null;
    let i = array.length;
    while (i > 0) list = prepend(array[--i], list);
    return list;
}

// listToArray returns an array build out of the nodes of a list
function listToArray(list = null) {
    let array = [];
    let element = list;
    while (element != null) {
        array.push(element.value);
        element = element.rest;
    }
    return array;
}

// nth returns the value contained at a list at position n
function nth(list = null, position = 0) {
    let element = list;
    for (let i = 0; element != null; i++) {
        if (i == position) return element.value;
        element = element.rest
    }
    return undefined
}


// Official test cases from https://eloquentjavascript.net/code/#4.3

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Additional test cases
console.log(arrayToList([]));
// → null
console.log(arrayToList());
// → null
console.log(listToArray(null));
// → []
console.log(listToArray());
// → []
console.log(nth(arrayToList([10, 20, 30]), 3));
// → undefined
console.log(nth(arrayToList(), 3));
// → undefined