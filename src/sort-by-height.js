const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArray = [];
  const indexArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexArray.push(i);
    } else {
      sortedArray.push(arr[i]);
    }
  }

  sortedArray.sort((a, b) => a - b);

  indexArray.forEach(index => {
    sortedArray.splice(index, 0, -1);
  });

  return sortedArray;
}

module.exports = {
  sortByHeight
};
