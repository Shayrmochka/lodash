const arrayErrorHandler = (...array) => {
  let checker = false;

  array.forEach((el) =>
    Array.isArray(el) ? (checker = true) : (checker = false)
  );

  //return Array.isArray(array)
  return checker
    ? {
        value: true,
        message: "'Array' data type correctly",
      }
    : {
        value: false,
        message: new Error("First argument must be 'Array'"),
      };
};

const numberErrorHandler = (value) => {
  return typeof value === "number"
    ? {
        value: true,
        message: "'Number' data type correctly",
      }
    : {
        value: false,
        message: new Error("Argument must be 'Number'"),
      };
};

// implementation lodash function
function _() {
  // ===========================
  // _.chunk(array, [size=1])
  // ===========================
  //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  const chunk = (array, size = 1) => {
    const checkTypeResult = arrayErrorHandler(array);
    const checkIsNumber = numberErrorHandler(size);

    if (checkTypeResult.value && checkIsNumber.value) {
      const newArray = [];
      while (array.length) {
        const items = array.splice(0, size);
        newArray.push(items);
      }

      return newArray;
    } else
      return checkTypeResult.value
        ? checkIsNumber.message
        : checkTypeResult.message;
  };

  _.chunk = chunk;

  // ===========================
  // _.compact(array)
  // ===========================
  // Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  const compact = (array) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      return array.filter(
        (el) =>
          el !== false &&
          el !== null &&
          el !== 0 &&
          el !== "" &&
          el !== undefined &&
          !isNaN(el)
      );
    } else return checkTypeResult.message;
  };

  _.compact = compact;

  // ===========================
  // _.concat(array, [values])
  // ===========================
  // Creates a new array concatenating array with any additional arrays and/or values.
  const concat = (array, ...args) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      return array.concat(...args);
    } else return checkTypeResult.message;
  };

  _.concat = concat;

  // ===========================
  // _.difference(array, [values])
  // ===========================
  // Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
  // The order and references of result values are determined by the first array.
  const difference = (array, values) => {
    const checkTypeResult = arrayErrorHandler(array, values);

    if (checkTypeResult.value) {
      let test = [];

      array.forEach((el) => (values.includes(el) ? false : test.push(el)));
      return test;
    } else return checkTypeResult.message;
  };

  _.difference = difference;

  // ===========================
  // _.differenceBy(array, [values], [iteratee=_.identity])
  // ===========================
  // This method is like _.difference bit can work with “double precision floating point numbers”
  const differenceBy = (array, values, mathFunc) => {
    const checkTypeResult = arrayErrorHandler(array, values);

    if (checkTypeResult.value) {
      let test = [];

      values = values.map((el) => mathFunc(el));
      array.forEach((el) =>
        values.includes(mathFunc(el)) ? false : test.push(el)
      );

      return test;
    } else return checkTypeResult.message;
  };

  _.differenceBy = differenceBy;

  // ===========================
  // _.drop(array, [n=1])
  // ===========================
  // Creates a slice of array with n elements dropped from the beginning.
  const drop = (array, numberOfDrops = 1) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      //array.splice(0, numberOfDrops);
      return array.slice(numberOfDrops);
    } else return checkTypeResult.message;
  };

  _.drop = drop;

  // ===========================
  // _.dropRight(array, [n=1])
  // ===========================
  // Creates a slice of array with n elements dropped from the end.
  const dropRight = (array, numberOfDrops = 1) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      return numberOfDrops !== 0 ? array.slice(0, -numberOfDrops) : array;
    } else return checkTypeResult.message;
  };

  _.dropRight = dropRight;

  // ===========================
  // _.fill(array, value, [start=0], [end=array.length])
  // ===========================
  // Fills elements of array with value from start up to, but not including, end.
  const fill = (array, value, start = 0, end = array.length) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      for (let i = 0; i < array.length; i++) {
        if (i >= start && i < end) {
          array[i] = value;
        }
      }

      return array;
    } else return checkTypeResult.message;
  };

  _.fill = fill;

  // ===========================
  // _.flatten(array)
  // ===========================
  // Flattens array a single level deep.
  const flatten = (array) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      return array.flat();
    } else return checkTypeResult.message;
  };

  _.flatten = flatten;

  // ===========================
  // _.flattenDeep(array)
  // ===========================
  // Recursively flattens array.
  const flattenDeep = (array) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      function flatDeep(array, d = 1) {
        return d > 0
          ? array.reduce(
              (acc, val) =>
                acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
              []
            )
          : array.slice();
      }
      flatDeep(array, Infinity);

      //array.forEach((el) => (Array.isArray(el) ? deep(array) : array));
      return array;
    } else return checkTypeResult.message;
  };

  _.flattenDeep = flattenDeep;

  // ===========================
  // _.flattenDepth(array, [depth=1])
  // ===========================
  // Recursively flatten array up to depth times.

  const flattenDepth = (array, depth = 1) => {
    const checkTypeResult = arrayErrorHandler(array);

    if (checkTypeResult.value) {
      for (let i = 0; i < depth; i++) {
        array = array.flat();
      }

      return array;
    } else return checkTypeResult.message;
  };

  _.flattenDepth = flattenDepth;

  // ======================================================
  //                        DATE
  // ======================================================

  _.DATE = "---DATE---";

  // ===========================
  // _.now()
  // ===========================
  // Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
  const now = () => {
    return Date.now();
  };

  _.now = now;

  // ======================================================
  //                     FUNCTIONS
  // ======================================================

  _.FUNCTIONS = "---FUNCTIONS---";

  // ===========================
  // _.after(n, func)
  // ===========================
  // This method creates a function that invokes func once it's called n or more times.
  const after = (number, func) => {
    let i = 0;
    return () => {
      i++;
      i === number ? func() : false;
    };
  };

  _.after = after;

  // ===========================
  // _.after(n, func)
  // ===========================
  // Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times.
  // Subsequent calls to the created function return the result of the last func invocation.
  const before = (number, func) => {
    let i = 0;
    return () => {
      i++;
      i < number ? func() : false;
    };
  };

  _.before = before;

  // ===========================
  // _.bind(func, thisArg, [partials])
  // ===========================
  // Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
  // The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.
  const bind = (func, obj, string) => {
    return func.bind(obj, string);
  };

  _.bind = bind;

  // ===========================
  // _.delay(func, wait, [args])
  // ===========================
  //Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.
  const delay = (func, delay, ...args) => {
    return setTimeout(() => func(args.join(" ")), delay);
  };

  _.delay = delay;

  // ===========================
  // _.overArgs(func, [transforms=[_.identity]])
  // ===========================
  // Creates a function that invokes func with its arguments transformed.
  const overArgs = (func, transforms) => {
    return (...args) => {
      let values = func(...args);
      return values.map((el, i) =>
        i < transforms.length ? transforms[i](el) : transforms[0](el)
      );
    };
  };
  _.overArgs = overArgs;
}

// initialiazation lodash function
_();

//
//
//
//
//
//
//
//
//
//
// console.log(_.chunk([1, 2, 3, 4], "123"));
// console.log(_.compact([0, 1, false, 2, "", 3]));
// console.log(_.concat([1], 2, [3], [[4]]));
// console.log(_.difference([2, 1], [2, 3]));
// console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
//console.log(_.drop([1, 2, 3], 2));
// => [3]

//
//
//

// use _.[function] - for work with lodash functions
// ==================================================

// let testArr = [];
// for (let i = 0; i < 1000; i++) {
//   testArr.push(i);
// }

// const timer1 = performance.now();
// for (let i = 0; i < 1000; i++) {
//   chunk1(testArr, 10);
// }
// const timer2 = performance.now();
// console.log("Func 1", timer2 - timer1);

// const timer3 = performance.now();
// for (let i = 0; i < 1000; i++) {
//   chunk(testArr, 10);
// }
// const timer4 = performance.now();
// console.log("Func 2", timer4 - timer3);
