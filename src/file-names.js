const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesArray = names.map((element) => element);
  let checkArray = names.map((element) => element);

  let changeElemIndex = 0;
  let currentName = '';
  let count = 1;

  if (names.length === 0) {
    return namesArray;
  }

  for (let i = 0; i < names.length; i++) {
    checkArray[i] = 'already empty';
    currentName = namesArray[i];
    while (checkArray.includes(currentName)) {
      changeElemIndex = checkArray.indexOf(currentName);
      namesArray[changeElemIndex] = currentName + '(' + count + ')';
      count += 1;
      checkArray[changeElemIndex] = 'already empty';
    }
    count = 1;
  }

  return namesArray;
}

module.exports = {
  renameFiles
};
