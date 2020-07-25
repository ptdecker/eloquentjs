// quotestyle.js
//
// Single to double quote replacement

// Official test case from https://eloquentjavascript.net/code/#9.2

let text = "'I'm the cook,' he said, 'it's my job.'";

// Change this call

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
