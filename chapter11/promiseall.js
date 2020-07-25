// promiseall.js
//
// Implements Promise.all
//
// NOTE: I had to turn to the author's solution for this one.  But, I experimented
// with alternate approaches and learned from that.  One idea would be to replace
// pending with the number of items in results; however, even though JavaScript
// arrays are sparse the lenght of an array is always one greater then the last
// index that contains a value.  This means if an single item were added at results[5]
// the length would be '6' instead of '1'.  As an alternative, perhaps a map could
// be use; however, rendering the map to an array compomises the ordering of the
// results (i.e. the results do not match the order of the promises).  Also,
// looked at using a for-in, but we need the index 'i' for storing the results.
// So, I was not able to improve upon the author's approach.  I was able to
// make one improvement--we might as well return immediately if we have zero
// promises. So, instead of checking that last, we can move that guard check
// right to the top.

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length == 0) resolve([]);
    let results = [];
    let pending = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          results[i] = result;
          pending--;
          if (pending == 0) resolve(results);
        })
        .catch(reject);
    }
  });
}

// Official test cases from https://eloquentjavascript.net/code/#11.2

Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
