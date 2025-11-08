const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n;

  const numAsString = String(number);

  let newNumber = 0;
  let maxNumber = 0;

  for (let i = 0; i < numAsString.length; i++) {
    newNumber = Number(numAsString.replace(numAsString[i], ''));
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
