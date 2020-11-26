//function that imitates array map function
const map = function(array,callback) {
  const results = [];
  for(let arr of array){
    results.push(callback(arr))
  }
  return results;
}
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
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);
const numbers = [ 1, 2, 3, 4]
const results2 = map(numbers,num => num*2);
assertArraysEqual(results2, [2, 4, 6, 8]);
const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);