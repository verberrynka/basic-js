const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let shortestStr = '';
  let otherStr = '';

  let commonCharCount = 0;
  let checkChar = '';

  if (s1.length <= s2.length) {
    shortestStr = s1;
    otherStr = s2;
  } else {
    shortestStr = s2;
    otherStr = s1;
  }

  for (let i = 0; i < shortestStr.length; i++) {
    checkChar = shortestStr[i];
    if (otherStr.includes(checkChar)) {
      commonCharCount += 1;
      otherStr = otherStr.replace(checkChar, '');
    }
  }

  return commonCharCount;
}

module.exports = {
  getCommonCharacterCount
};
