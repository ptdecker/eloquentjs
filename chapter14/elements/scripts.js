// scripts.js
//
// JavaScript loaed by index.html in support of exercise

// byTagName counts the number of tags in the document.body object by
// recursively walking through the nested elements and pushing the
// children matching the tag in question onto the queue
function byTagName(node, tagName) {
  // Embedded recursive function to walk down the node tree
  const explore = (node) => {
    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName == tagName) found.push(child);
        explore(child);
      }
    }
  };

  let found = [];
  tagName = tagName.toUpperCase();
  explore(node);
  return found;
}

// Official test cases from: https://eloquentjavascript.net/code/#14.2

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2
