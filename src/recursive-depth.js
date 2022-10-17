const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    if (arr instanceof Array) {
      return arr.reduce((acc, cur) => {
        return cur instanceof Array ? Math.max(acc, 1 + this.calculateDepth(cur)) : acc
      }, 1)
    }
  }
}


module.exports = {
  DepthCalculator
};
