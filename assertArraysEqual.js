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
//function that consoles the comparison result of two arrays
const assertArraysEqual =  (array1,array2) => {
  let result = eqArrays(array1,array2);
  if (result) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed!`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed!`);
  }
};

assertEqual(["1", "2", "3"], ["1", "4", "3"]);
assertEqual(["1", "2", "3"], ["1", "2", "3"]);
assertEqual(["1", "2", "3"], ["1", "2", 3]);
assertEqual(["1", "2", 3], ["1", "2", 3]);