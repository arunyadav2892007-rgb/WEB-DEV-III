const isEven = require('./modules/isEven');
const { log } = require('./modules/logger');

log('Testing custom modules...');

const numbers = [4, 7, 10, 15];
numbers.forEach((num) => {
  log(`Is ${num} even? -> ${isEven(num)}`);
});
