// closure.js
//
//

// The 'fun' function is defined in egg.js as:
//
// specialForms.fun = (args, scope) => {
//     if (!args.length) {
//         throw new SyntaxError("Functions need a body");
//     }
//     let body = args[args.length - 1];
//     let params = args.slice(0, args.length - 1).map(expr => {
//         if (expr.type != "word") {
//             throw new SyntaxError("Parameter names must be words");
//         }
//         return expr.name;
//     });
//
//     return function() {
//         if (arguments.length != params.length) {
//             throw new TypeError("Wrong number of arguments");
//         };
//         let localScope = Object.create(scope);
//         for (let i = 0; i < arguments.length; i++) {
//             localScope[params[i]] = arguments[i];
//         }
//         return evaluate(body, localScope);
//     };
// };
//
// When a function is returned by "return fucntion()" in the above code, the body of that
// function captures in its local scope the scope currently in effect when the function
// was created thus creating a closure.

import * as egg from "../resources/egg.js";

egg.run(`
do(define(f, fun(a, fun(b, +(a, b)))),
    print(f(4)(5)))
`);
