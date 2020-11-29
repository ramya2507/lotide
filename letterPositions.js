const assertArraysEqual =  require('./index').assertArraysEqual;
//function that returns indices of all elements of a string 
const letterPositions = function(sentence) {
  const results = {};
  if (sentence[0] === ' ') {
    sentence = sentence.trim(sentence[0])
  }
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length ;i++) {
    let compareLetter = sentence[i];
    if (compareLetter !== " ") {
     results[compareLetter] = [];
    }
    for (let j = 0 ; j < sentence.length; j++) {
     if (compareLetter === sentence[j] && compareLetter !== ' ') {
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