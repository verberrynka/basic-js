const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const parts = domain.split('.').reverse();
    let currentDns = '';

    for (let j = 0; j < parts.length; j++) {
      const part = parts[j];
      currentDns = currentDns + "." + part;
      if (dnsStats[currentDns] === undefined) {
        dnsStats[currentDns] = 1;
      } else {
        dnsStats[currentDns] += 1;
      }
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
