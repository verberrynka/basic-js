const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = false;
  let teamName = '';

  const checkArray = Array.isArray(members);

  if (checkArray === false) {
    return result;
  }

  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      teamName += members[i].toUpperCase().trim().charAt(0);
    }
  }

  const checkStringInclusionInArray = (element) => typeof element === 'string';

  if (members.some(checkStringInclusionInArray)) {
    result = teamName.split('').sort().join('');
  }

  return result;
}

module.exports = {
  createDreamTeam
};
