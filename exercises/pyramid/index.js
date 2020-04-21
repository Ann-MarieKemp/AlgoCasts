// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);
//   for (let i = 0; i < n; i++) {
//     let level = '';
//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (mid - i <= j && mid + i >= j) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, rows = 0, level = '') {
  let mid = Math.floor((2 * n - 1) / 2);
  if (rows === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, rows + 1);
  }
  let add;
  if (mid - rows <= level.length && mid + rows >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, rows, level + add);
}

module.exports = pyramid;
