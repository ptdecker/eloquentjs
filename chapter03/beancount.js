// beancount.js
//
// Implements a function that determines how many of a given character are in a
// string and then uses that function to implement a second function that
// counts the number of the letter 'B' in a string

function countLetters(s, l) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "B") count++;
    }
    return count
}

function countBs(s) {
    return countLetters(s, 'B');
}

let s = "This string has none of them.";
console.log(`'${s}' contains ${countBs(s)} letter 'B's`);
s = "Bye, baby Bunting, Bobby's gone a-hunting";
console.log(`'${s}' contains ${countBs(s)} letter 'B's`);
s = "";
console.log(`'${s}' contains ${countBs(s)} letter 'B's`);