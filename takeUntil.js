const takeUntil = function(array, callback) {
  let result = [];
  for (let arr of array){
    if(!callback(arr)){
      result.push(arr);
    } else {
      return result;
    }
  }
}

//Function to compare two array
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
const assertArraysEqual =  (actual,expected) => {
  let result = eqArrays(actual,expected);
  if (result) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed! ${actual} = ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed! ${actaul} != ${expected}`);
  }
};

//Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
