/*
    Topics:
    -------
        A. Iterate 
        B. ES5 Iteration (old implementation)
        C. ES6 Array iteration -> native implementation.
        D. ES6 String iteration -> native implementation.

    Notes:
    -----------
        A. Iterate:
        -----------
            * It's an object. 
            * Iterable things like "Array, String, map, set".
            * We can handle our iteration / traversing / looping manually.
            * Literal object, factory, constructor are not Iterable.
            * But we can iterate object that we created manually. 
            * Normal loop isn't manually controlled.
            * Every iterate have an next() method.
            * 
*/

// ------------------------------------------------------------------------>>

// A. Iterate, Iterable, Iteration:

// Normal loop --------------------
const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  arr[i]; // All elements printed at a time automatically.
}

// B. ES5 Iteration (old implementation)--------------------

const crateIterator = (collection) => {
  let i = 0;
  return {
    next() {
      return {
        done: i >= collection.length,
        value: collection[i++],
      };
    },
  };
};

const iterated = crateIterator(arr);
iterated.next(); // {done: false, value: 1}
iterated.next(); // {done: false, value: 2}
iterated.next(); // {done: false, value: 3}
iterated.next(); // {done: false, value: 4}
iterated.next(); // {done: true, value: undefined}

// ------------------------------------------------------------------------>>

// C. ES6 Array iteration -> native implementation.
const array = [2, 4, 10];
const iterate = array[Symbol.iterator]();
iterate.next(); // {value: 2, done: false}
iterate.next(); // {value: 4, done: false}
iterate.next(); // {value: 10, done: false}
iterate.next(); // {value: undefined, done: true}

// ------------------------------------------------------------------------>>

// D. ES6 String iteration -> native implementation.

const str = "Text";
const iterateStr = str[Symbol.iterator]();
iterateStr.next(); // {value: 'T', done: false}
iterateStr.next(); // {value: 'e', done: false}
iterateStr.next(); // {value: 'x', done: false}
iterateStr.next(); // {value: 't', done: false}
iterateStr.next(); // {value: undefined, done: true}

// ------------------------------------------------------------------------>>

// For-of loop
const forOf = () => {
  for (let value of array) {
    console.log(value);
  }
};
forOf();

// ------------------------------------------------------------------------>>
