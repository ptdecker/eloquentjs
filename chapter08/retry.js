// retry.js
//
// Retries a failing function

class MultiplicatorUnitFailure extends Error {}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (err) {
      if (!(err instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}

// Official test cases and erant fuction from https://eloquentjavascript.net/code/#8.1

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

console.log(reliableMultiply(8, 8));
// → 64
