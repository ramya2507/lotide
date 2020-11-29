const eqObjects = require('./eqObjects');

// Function implementation
const assertObjectsEqual = function(actual, expected) {
  let result = eqObjects(actual,expected);
  const inspect = require('util').inspect;
  if (result) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed! ${inspect(actual)} = ${inspect(expected)}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed! ${inspect(actual)} != ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual

//Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 
