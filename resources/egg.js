// egg.js
//
// Base interpreter for the Egg language
//
// NOTES:  No need for skipSpace() when we have trim(). Also, flattened out some
// of the functions by leveraging that returns and throws terminate execution of
// a function (i.e. no need for an 'else' or 'else if' after terminating).  And,
// organized the components more along the lines of a LISP interpreter

/* ENVIROMENT */

export {
  run,
  topScope,
  parseExpression,
  parseApply,
  parse,
  specialForms,
  evaluate,
};

const stringAtomic = /^"([^"]*)"/;
const numberAtomic = /^\d+\b/;
const wordAtomic = /^[^\s(),#"]+/;

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
  topScope[op] = Function("a, b", `return a ${op} b;`);
}

topScope.print = (value) => {
  console.log(value);
  return value;
};

/* SPECIAL FORMS */

const specialForms = Object.create(null);

specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  }
  if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  }
  return evaluate(args[2], scope);
};

specialForms.while = (args, scope) => {
  if (args.length != 2) {
    throw new SyntaxError("Wrong number of args to while");
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope);
  }
  return false;
};

specialForms.do = (args, scope) => {
  let value = false;
  for (let arg of args) {
    value = evaluate(arg, scope);
  }
  return value;
};

specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of define");
  }
  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError("Functions need a body");
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map((expr) => {
    if (expr.type != "word") {
      throw new SyntaxError("Parameter names must be words");
    }
    return expr.name;
  });

  return function () {
    if (arguments.length != params.length) {
      throw new TypeError("Wrong number of arguments");
    }
    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i];
    }
    return evaluate(body, localScope);
  };
};

/* PARSER */

function parseExpression(program) {
  program = program.trim();
  let match, expr;
  if ((match = stringAtomic.exec(program))) {
    expr = { type: "value", value: match[1] };
  } else if ((match = numberAtomic.exec(program))) {
    expr = { type: "value", value: Number(match[0]) };
  } else if ((match = wordAtomic.exec(program))) {
    expr = { type: "word", name: match[0] };
  } else {
    throw new SyntaxError("Unexpected syntax: " + program);
  }
  return parseApply(expr, program.slice(match[0].length));
}

function parseApply(expr, program) {
  program = program.trim();
  if (program[0] != "(") return { expr: expr, rest: program };
  program = program.slice(1).trim();
  expr = { type: "apply", operator: expr, args: [] };
  while (program[0] != ")") {
    let arg = parseExpression(program);
    expr.args.push(arg.expr);
    program = arg.rest.trim();
    if (program[0] == ",") {
      program = program.slice(1).trim();
    } else if (program[0] != ")") {
      throw new SyntaxError("Expected ',' or ')'");
    }
  }
  return parseApply(expr, program.slice(1));
}

function parse(program) {
  let { expr, rest } = parseExpression(program);
  if (rest.trim().length > 0) {
    throw new SyntaxError("Unexpected text after program");
  }
  return expr;
}

/* EVAL */

function evaluate(expr, scope) {
  if (!(expr.type == "value" || expr.type == "word" || expr.type == "apply")) {
    throw new ReferenceError(`Undefined expression type: ${expr.type}`);
  }
  // Value expression type
  if (expr.type == "value") return expr.value;

  // Word expression type (bindings)
  if (expr.type == "word") {
    if (expr.name in scope) return scope[expr.name];
    throw new ReferenceError(`Undefined binding: ${expr.name}`);
  }

  // Apply expression type ("applicaitos")
  let { operator, args } = expr;
  if (operator.type == "word" && operator.name in specialForms) {
    return specialForms[operator.name](expr.args, scope);
  }
  let op = evaluate(operator, scope);
  if (typeof op == "function") {
    return op(...args.map((arg) => evaluate(arg, scope)));
  }
  throw new TypeError("Applying a non-function");
}

/* APPLY */

function run(program) {
  return evaluate(parse(program), Object.create(topScope));
}
