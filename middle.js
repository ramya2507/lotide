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
    console.log(`\u2705 \u2705 \u2705 Assertion Passed!`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed!`);
  }
};

//function to return the mid elements of an array
const middle = (array) => {
  let length = array.length;
  if(length > 2){
    let midArray = [];
    let mid = Math.floor(length/2);
    if (length % 2 !== 0) { 
      midArray.push(array[mid]);
    } else {
      midArray.push(array[mid -1]);
      midArray.push(array[mid]);
    }
    return midArray;
  } else {
    return [];
  } 
};
//Test code
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);