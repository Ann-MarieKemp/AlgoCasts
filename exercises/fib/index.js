// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// function memoize(func) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = func.apply(this, args);
//     cache[args] = result;
//     return result;
//   };
// }
function memoize(func) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = func.apply(this, args);
    cache[args] = result;
    return result;
  };
}
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
// function fib(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     let fibArr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       let num = fibArr[i - 1] + fibArr[i - 2];
//       fibArr.push(num);
//     }
//     return fibArr[n];
//   }
// }

module.exports = fib;
