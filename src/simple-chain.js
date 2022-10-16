const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link: [],

  getLength() {
    return this.link.length
  },

  addLink(value) {
    value === undefined ? this.link.push('') : this.link.push(value)
    return this
  },

  removeLink(position) {
    if (+position && +position > 0 && +position <= this.link.length) {
      this.link.splice(+position - 1, 1)
    } else {
      this.link.length = 0
      throw new Error(`You can't remove incorrect link!`)
    }
    return this
  },

  reverseChain() {
    this.link.reverse()
    return this
  },

  finishChain() {
    const linkCopy = this.link.slice()
    this.link.length = 0
    return linkCopy.map((el, i) => i == 0 ? `( ${el} )` : `~~( ${el} )`).join('')
  },
};

module.exports = {
  chainMaker
};
