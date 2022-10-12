const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const countCats = arr => arr.reduce((acc, cur) => {
  cur.forEach(e => /^\^{2}$/.test(e) ? acc += 1 : acc)
  return acc
}, 0)

module.exports = {
  countCats
};
