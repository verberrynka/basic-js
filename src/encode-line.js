const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encryptedStr = '';
  let currentChar = '';
  let lastChar = '';
  let charCount = 1;

  if (str === '') {
    return encryptedStr;
  }

  for (let i = 0; i <= str.length; i++) {
    if (i < str.length) {
      currentChar = str[i];
    } else {
      currentChar = '';
    }

    if (currentChar === lastChar) {
      charCount += 1;
    } else {
      if (charCount > 1) {
        encryptedStr += charCount;
        encryptedStr += lastChar;
      } else {
        encryptedStr += lastChar;
      }
      charCount = 1;
    }

    lastChar = currentChar;
  }

  return encryptedStr;
}

module.exports = {
  encodeLine
};
