const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const getValue = (row, column) => {
      if (row < 0 || row >= matrix.length) {
          return 0;
      }
      if (column < 0 || column >= matrix[row].length) {
          return 0;
      }
      return matrix[row][column];
  };

const gameBoard = Array.from({ length: matrix.length }, (_, i) =>
  Array.from({ length: matrix[i].length }, (_, j) =>
    getValue(i - 1, j - 1) +
        getValue(i - 1, j) +
        getValue(i - 1, j + 1) +
        getValue(i, j - 1) +
        getValue(i, j + 1) +
        getValue(i + 1, j - 1) +
        getValue(i + 1, j) +
        getValue(i + 1, j + 1)
  )
);
return gameBoard;
}

module.exports = {
  minesweeper
};
