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

    for (let i = 0; i < a.length; i++) {

      if (a[i]) {
        if (a[i] == sec[0]) {
          if (a[i + 1]) {
            a.splice(i, 2)
          } else a.splice(i, 1)
        } else if (a[i] == sec[1]) {
          if (a[i - 1]) {
            a.splice(i - 1, 2)
          } else a.splice(i, 1)
        } else if (a[i] == sec[2]) {
          if (a[i + 1]) {
            a.splice(i, 1, a[i + 1])
          } else a.splice(i, 1)
        } else if (a[i] == sec[3]) {
          if (a[i - 1]) {
            a.splice(i, 1, a[i - 1])
          } else a.splice(i, 1)
        }
      }
    }

    if (sec.some(el => el == a.filter(d => d == el).join(''))) {
      a.splice(a.indexOf(sec.filter(el => el == a.filter(d => d == el).join('')).join('')), 1)
    }
    return a
  }
  throw new Error(`'arr' parameter must be an instance of the Array!`)
}

// console.log(transform([1, 2, 3, '--discard-next', 4, 5])) //  [1, 2, 3, 5]
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5])) //  [1, 2, 4, 5]
// console.log(transform([1, 2, 3, '--double-next', 4, 5])) //  [1, 2, 3, 4, 4, 5]
// console.log(transform([1, 2, 3, '--double-prev', 4, 5])) //  [1, 2, 3, 3, 4, 5]
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) //  [1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])) //  [1, 2, 3, 1337, 1337, 1337, 4, 5]
// console.log(transform(['--discard-prev', 2, 3, 4])) //  [2, 3, 4]
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])) //  [1, 2, 3, 4, 5]


module.exports = {
  transform
};
