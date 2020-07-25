// arrays.js
//
// Extends the base Egg interpreter to add support for arrays

import * as egg from "../resources/egg.js";

egg.topScope.array = (...values) => {
  return values;
};

egg.topScope.length = (array) => {
  return array.length;
};

egg.topScope.element = (array, i) => {
  return array[i];
};

// Official test case from: https://eloquentjavascript.net/code/#12.1

egg.run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6
