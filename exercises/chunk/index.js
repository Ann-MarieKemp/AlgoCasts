// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunkyArr = [];
//   for (let item of array) {
//     const last = chunkyArr[chunkyArr.length - 1];
//     if (!last || last.length === size) {
//       chunkyArr.push([item]);
//     } else {
//       last.push(item);
//       chunkyArr[chunkyArr.length - 1] = last;
//     }
//   }
//   return chunkyArr;
// }

function chunk(array, size) {
  const chunkyArr = [];
  let index = 0;
  while (index < array.length) {
    let newSlice = array.slice(index, index + size);
    chunkyArr.push(newSlice);
    index += size;
  }
  return chunkyArr;
}
module.exports = chunk;
