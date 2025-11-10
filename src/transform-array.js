const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArray = [];

  const isControlElement = (element) => {
    element === "--discard-next" ||
    element === "--discard-prev" ||
    element === "--double-next" ||
    element === "--double-prev";
  }
  
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (currentElement === "--discard-next") {
      if (i < arr.length || !isControlElement(arr[i])) {
        i++;
      }
    } else if (currentElement === "--discard-prev") {
      if (i > 0 && !isControlElement(arr[i - 1])) {
          transformedArray.pop();
      }
    } else if (currentElement === "--double-next") {
      if (i < arr.length - 1 && !isControlElement(arr[i+1])) {
          transformedArray.push(arr[i+1]);
      }
    } else if (currentElement === "--double-prev") {
      if (transformedArray.length > 0 && !isControlElement(transformedArray[transformedArray.length-1])) {
          transformedArray.push(transformedArray[transformedArray.length - 1]);
      }
    } else {
      transformedArray.push(currentElement);
    }
  }

  return transformedArray;
}

module.exports = {
  transform
};
