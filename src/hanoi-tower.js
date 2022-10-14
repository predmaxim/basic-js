const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = (Math.pow(2, disksNumber) - 1)
  const seconds = Math.floor((turns / turnsSpeed * 100) * 36)
  return { turns: turns, seconds: seconds }
}

module.exports = {
  calculateHanoi
};

// console.log(calculateHanoi(5, 4074))// { turns: 31, seconds: 27 }
// console.log(calculateHanoi(38, 4594))// { turns: 274877906943, seconds: 215402800390 }
// console.log(calculateHanoi(34, 4005))// { turns: 17179869183, seconds: 15442579040 }
// console.log(calculateHanoi(19, 4770))// { turns: 524287, seconds: 395688 }
// console.log(calculateHanoi(23, 4344))// { turns: 8388607, seconds: 6951884 }