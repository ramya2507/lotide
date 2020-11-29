const eqArrays = require('./eqArrays');
//function that consoles the comparison result of two arrays
const assertArraysEqual =  (actual,expected) => {
  let result = eqArrays(actual,expected);
  if (result) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed! ${actual} = ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed! ${actual} != ${expected}`);
  }
};

module.exports = assertArraysEqual;