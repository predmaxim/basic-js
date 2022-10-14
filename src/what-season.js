const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  }

  if (date) {
    if (date instanceof Date && date[Symbol.toStringTag] !== 'Date') {
      return Object.keys(seasons).filter((key) => seasons[key].some(val => val == date.getMonth())).join('')
    } else throw new Error('Invalid date!');
  } else return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};
