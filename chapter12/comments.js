// comments.js
//
// Extends the basic egg interpreter to support comments
//
// NOTE:  This excercise replaces parseExpression, parseApply, and parse
// functions from the base Egg interpreter with new versions of these 
// functions that leverage a modified version of the author's skipSpace
// function.  The base Egg interpreter I implemented skipped using this
// function originally since the trim function is built-in and has the
// same effect of triming spasces.  But skipSpace is re-introduced here
// so it can then be extended to ignore comments.

/* Solution to exercise */

const noWhiteNorComment = /^(\s|#.*)*/
const stringAtomic = /^"([^"]*)"/
const numberAtomic = /^\d+\b/
const wordAtomic = /^[^\s(),#"]+/

function skipSpace(string) {
    let skip = noWhiteNorComment.exec(string);
    return string.slice(skip[0].length);
}

/* NEW PARSER FUNCTIONS */

function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = stringAtomic.exec(program)) {
        expr = { type: "value", value: match[1] };
    } else if (match = numberAtomic.exec(program)) {
        expr = { type: "value", value: Number(match[0]) };
    } else if (match = wordAtomic.exec(program)) {
        expr = { type: "word", name: match[0] };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    };
    return parseApply(expr, program.slice(match[0].length));
};

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") return { expr: expr, rest: program };
    program = skipSpace(program.slice(1));
    expr = { type: "apply", operator: expr, args: [] };
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        };
    };
    return parseApply(expr, program.slice(1));
};

function parse(program) {
    let { expr, rest } = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    };
    return expr;
};

// Official test case from:  https://eloquentjavascript.net/code/#12.3

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}