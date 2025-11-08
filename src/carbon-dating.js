const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result = false;
  const numberSampleActivity = Number(sampleActivity);

  if (typeof sampleActivity === 'string' && !isNaN(numberSampleActivity)) {

    if(numberSampleActivity === 0){
      return false;
    }

    if(numberSampleActivity > MODERN_ACTIVITY){
        return false;
    }
    result = (HALF_LIFE_PERIOD / Math.log(2)) * Math.log(MODERN_ACTIVITY / numberSampleActivity);
  }

  return result ? Math.ceil(result) : false;
}

module.exports = {
  dateSample
};
