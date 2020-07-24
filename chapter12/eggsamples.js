// eggsamples.js
//
// Sample Egg programs using the base Egg interpreter

import * as egg from "../resources/egg.js"

egg.run(`
do(define(total, 0),
    define(count, 1),
    while(<(count, 11),
        do(define(total, +(total, count)),
            define(count, +(count, 1)))),
    print(total))
`);

egg.run(`
do(define(plusOne, fun(a, +(1, 1))),
    print(plusOne(10)))
`);

egg.run(`
do(define(pow, fun(base, exp,
    if(==(exp, 0),
        1,
        *(base, pow(base, -(exp, 1)))))),
    print(pow(2, 10)))
`);