// dominant.js
//
// Computes the dominate writing direction in a string

import '../resources/scripts.js';

// characterScript() determines the Unicode script to which a givern character
// belongs.
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
                return code >= from && code < to;
            })) {
            return script;
        }
    }
    return null;
}

// countBy() returns a set of groups and, for each group, the number of items
// that belong in that group.  countBy() is passed a function 'groupName' that
// determines the name of the group in which an individual item falls.
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

// dominantDirection() evaluates all the character codes contained in 'text' 
// and returns the Unicode direction property that corresponds to the direction
// to which the most character codes belong.
function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({ name }) => {
        return name;
    }).reduce((a, b) => b.count > a.count ? a : b);
}

// Official test cases from https://eloquentjavascript.net/code/#5.4

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl