// beancount.js
//
// Implements a function that determines how many of a given character are in a
// string and then uses that function to implement a second function that
// counts the number of the letter 'B' in a string

// countChar() returns the number of times character 'l' is found within string 's'
// NOTE: A for-of style array loop could be used in this function but that loop
// style is not introduced until chapter 4. 
function countChar(s, l) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "B") count++;
    }
    return count
}

// countBs() returns the number of times the character 'B' is found within string 's'
function countBs(s) {
    return countChar(s, 'B');
}

// Official test cases from https://eloquentjavascript.net/code/#3.3

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// Additional test cases

console.log(countChar("", "B"));
// → 0