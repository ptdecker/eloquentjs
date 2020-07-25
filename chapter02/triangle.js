// triangle.js
//
// Write a triangle on the console

for (let i = 0, pound = ""; i < 7; i++) {
  console.log((pound += "#"));
}

// NOTE: The above could also be done using the padStart method built into
// strings on an empty string (e.g. "".padStart(i,"#") == "#####") when i = 5)
// or with the repeat method (e.g. "#".repeat(4) = "####") but these methods
// are not introduced until chapter 4.
