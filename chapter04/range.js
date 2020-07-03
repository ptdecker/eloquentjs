// range.js
//
// Calculated the sum of a range

// range() returns an array containing elements every element between 'start'
// and 'end' inclusively in increments of 'step'
function range(start, end, step = (start < end) ? 1 : -1) {
    let result = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) result.push(i);
    } else {
        for (let i = start; i >= end; i += step) result.push(i);
    }
    return result
}

// sum() returns the summation of all the elements in an array
function sum(x) {
    let result = 0;
    for (let item of x) result += item;
    return result;
}

// Official test cases from https://eloquentjavascript.net/code/#4.1

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Additional test cases
console.log(range(10, 1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(range(10, 1, -3));
// → [10, 7, 4, 1]
console.log(range(1, 9, 3));
// → [1, 4, 7]
console.log(range(4, 1, 3));
// → []
console.log(range(1, 1, 3));
// → [1]
console.log(range(1, 9, 0));
// → []

// NOTE: At the expense of code readability, the if-else in range() could be
// replaced removed if the comparision within the for loop is changed to:
// 'for (let i = start; (step > 0 && i <= end) || (step <= 0 && i >= end); i += step) result.push(i);'