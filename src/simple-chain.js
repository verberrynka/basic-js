const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    let linkValue;

    if (value === undefined) {
      linkValue = ' ';
    } else {
      linkValue = String(value);
    }

    const linkToString = '(' + ' ' + linkValue + ' ' + ')';
    this.chain.push(linkToString);

    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position <= 0 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker,
};
