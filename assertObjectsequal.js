const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length){
    return false;
  }
  for(let key1 of keys1){
    if(Array.isArray(object1[key1])){
      let result = eqArrays(object1[key1],object2[key1]);
      if(!result){
        return false;
      }
    }
    if(object1[key1] !== object2[key1] && !Array.isArray(object1[key1])){
      return false;
    }
  }
  return true;
};

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

//Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 
