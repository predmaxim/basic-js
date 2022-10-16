const { NotImplementedError } = require('../extensions/index.js');

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
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options

  let a

  if (additionRepeatTimes > 1)
    a = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition
  else
    a = addition

  if (repeatTimes > 1)
    return (String(str) + a + separator).repeat(repeatTimes - 1) + (String(str) + a)
  else
    return String(str) + a
}


module.exports = {
  repeater
};
