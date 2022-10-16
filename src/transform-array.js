const { NotImplementedError } = require('../extensions/index.js');

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
  if (arr && Array.isArray(arr)) {
    let a = arr.slice();
    const sec = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

    a.forEach((e, i, a) => { 
      e == sec[0] ? a[i + 1] ? a.splice(i, 2) : a.splice(i, 1) : false
      e == sec[1] ? a[i - 1] ? a.splice(i - 1, 2) : a.splice(i, 1) : false
      e == sec[2] ? a[i + 1] ? a.splice(i, 1, a[i + 1]) : a.splice(i, 1) : false
      e == sec[3] ? a[i - 1] ? a.splice(i, 1, a[i - 1]) : a.splice(i, 1) : false
    })

    if (sec.some(el => el == a.filter(d => d == el).join(''))) {
      a.splice(a.indexOf(sec.filter(el => el == a.filter(d => d == el).join('')).join('')), 1)
    }
    return a
  }
  throw new Error(`'arr' parameter must be an instance of the Array!`)
}

module.exports = {
  transform
};
