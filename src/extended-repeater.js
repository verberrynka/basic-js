const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let data = {};
  let repeatedString = '';

  if (options) {
    if (typeof options === 'string') {
      try {
        data = JSON.parse(options);
      } catch (err) {
        data = {};
      }
    } else {
      data = options;
    }
  }

  const repeatTimes = data.repeatTimes === undefined ? 1 : data.repeatTimes;
  let separator = data.separator;
  let addition = data.addition;
  const additionRepeatTimes = data.additionRepeatTimes === undefined ? 1 : data.additionRepeatTimes;
  let additionSeparator = data.additionSeparator;

  if (str == null) {
    str = 'undefined';
  }
   if (addition == null){
    addition = '';
  }

  if (typeof str !== 'string'){
    str = String(str);
  }

  if (typeof addition !== 'string'){
    addition = String(addition);
  }

  if (separator === undefined) {
    separator = '+';
  }

  if (additionSeparator === undefined) {
    additionSeparator = '|';
  }

  let oneFullAdditionStr = '';

  if (addition) {
    oneFullAdditionStr = (addition + additionSeparator).repeat(additionRepeatTimes);
    let excessAdSep = additionSeparator.length;
    oneFullAdditionStr = oneFullAdditionStr.slice(0, -excessAdSep);
  }

  repeatedString = (str + oneFullAdditionStr + separator).repeat(repeatTimes);
  let excessSep = separator.length;
  repeatedString = repeatedString.slice(0, -excessSep);

  return repeatedString;
}

module.exports = {
  repeater
};
