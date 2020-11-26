const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (array1,array2) => {
  if(array1.length === array2.length){
    for(let i = 0; i < array1.length; i++){
      if(array1[i] === array2[i]){

      }else{
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get a false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba),true) // => true
assertEqual(eqObjects(ab, abc),false)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
