// deepcompare.js
//
// Makes a deep comparision between two objects

// deepEqual preforms an equality comparision between to objects by comparing
// all of an object's attributes.  If these objects are other objects, then
// drill down into that object recursively
function deepEqual(value1, value2 = value1) {
  if (value1 === value2) return true;
  if (
    value1 == null ||
    value2 == null ||
    typeof value1 != "object" ||
    typeof value2 != "object"
  )
    return false;
  let keys1 = Object.keys(value1),
    keys2 = Object.keys(value2);
  if (keys1.length != keys2.length) return false;
  for (let key of keys1)
    if (!(keys2.includes(key) && deepEqual(value1[key], value2[key])))
      return false;
  return true;
}

// Official test cases from https://eloquentjavascript.net/code/#4.4

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual({}, {}));
// → true
console.log(deepEqual({}, undefined));
// → false
console.log(deepEqual({}, null));
// → false
console.log(deepEqual({}));
// → true
console.log(deepEqual(undefined));
// → true
console.log(deepEqual(null));
// → true
console.log(deepEqual());
// → true
