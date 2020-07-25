// regexgolf.js
//
// JavaScript number matching

// Fill in the regular expressions (from https://eloquentjavascript.net/code/#9.1)

verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

verify(
  /ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

verify(/\s[\.,:;]/, ["bad punctuation ."], ["escape the period"]);

verify(/\S{7}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

verify(
  /\b[^\We]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) {
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    } else {
      console.log(`Correctly matched '${str}'`);
    }
  }
  for (let str of no) {
    if (regexp.test(str)) {
      console.log(`Failure-unexpected match for '${str}'`);
    } else {
      console.log(`Correctly didn't match '${str}'`);
    }
  }
}
