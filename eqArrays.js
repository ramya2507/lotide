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
//Test code 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);