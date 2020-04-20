// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max = 0;
  let maxChar = '';
  for (char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  for (objChar in obj) {
    if (obj[objChar] > max) {
      max = obj[objChar];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
