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
//function that returns indices of all elements of a string 
const letterPositions = function(sentence) {
  const results = {};
  if(sentence[0] === ' '){
    sentence = sentence.trim(sentence[0])
  }
  sentence = sentence.toLowerCase();
  for(let i = 0; i < sentence.length ;i++){
    let compareLetter = sentence[i];
    if(compareLetter !== " "){
     results[compareLetter] = [];
    }
    for(let j = 0 ; j < sentence.length; j++){
     if(compareLetter === sentence[j] && compareLetter !== ' '){
       results[compareLetter].push(j);
     }
    }
  }
  return results;
};
//Test codes
assertArraysEqual(letterPositions("lighthouse in the house").i,[1,11]);
assertArraysEqual(letterPositions("lighthouse in the house").n,[12]);
assertArraysEqual(letterPositions("lighthouse in the house").h,[3,5,15,18]);
assertArraysEqual(letterPositions(" lighthouse in the house").s,[8,21]);