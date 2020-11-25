const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//function to count the occurence of each letter in a sentence
const countLetters = (sentence) => {
  let letterCount = {};
  sentence = sentence.replace(/\s+/g,'');
  sentence = sentence.toLowerCase();
  for(let i = 0; i < sentence.length ;i++){
    let compareLetter = sentence[i];
    let count = 0;
    for(let letter of sentence){
     if(compareLetter === letter){
      count++
     }
    }
    letterCount[compareLetter] = count;
  }
  return letterCount;
};
//Test Code
console.log(countLetters("oh things Good"));
console.log( countLetters("lighthouse in the house"));
console.log( countLetters(" liGhthoUse In the house "));
