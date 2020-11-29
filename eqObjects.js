const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get a false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key1 of keys1) {
    if(Array.isArray(object1[key1])){
      let result = eqArrays(object1[key1],object2[key1]);
      if(!result){
        return false;
      }
    }
    if (object1[key1] !== object2[key1] && !Array.isArray(object1[key1])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
