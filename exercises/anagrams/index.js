// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   function map(word) {
//     let newWord = word.replace(/[^\w]/g, '').toLowerCase();
//     const wordMap = {};
//     for (let char of newWord) {
//       if (wordMap[char]) {
//         wordMap[char]++;
//       }
//       wordMap[char] = 1;
//     }

//     return wordMap;
//   }

//   const wordMapA = map(stringA);
//   const wordMapB = map(stringB);

//   if (Object.keys(wordMapA).length === Object.keys(wordMapB).length) {
//     for (let char in wordMapA) {
//       if (wordMapA[char] !== wordMapB[char]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// }

function anagrams(stringA, stringB) {
  function sort(word) {
    word.replace(/[^w]/g, '').toLowerCase();
    word = word.split('').sort().join('');

    return word;
  }
  return sort(stringA) === sort(stringB);
}
module.exports = anagrams;
