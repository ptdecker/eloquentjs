// fixedscope.js
//
// Corrects the scoping problem in the base Egg interpreter by creating 'set'
// that gives an existing binding a new value if it exists in the outer
// scope but not within the inner

import * as egg from "../resources/egg.js";

// See specialForms.set in /resources/egg.js for solution

egg.specialForms.set = (args, env) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Bad use of set");
  }
  let varName = args[0].name;
  let value = egg.evaluate(args[1], env);
  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value;
      return value;
    }
  }
  throw new ReferenceError(`Setting undefined variable ${varName}`);
};

// Official test cases from https://eloquentjavascript.net/code/#12.4

egg.run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
// → 50

try {
  egg.run(`set(quux, true)`);
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log("Received expected reference error");
  } else {
    throw err;
  }
}
// → Some kind of ReferenceError
