const assertObjectEquals = require('./assertObjectsequal')
//function to count the occurence of each letter in a sentence
const countLetters = (sentence) => {
  let letterCount = {};
  sentence = sentence.replace(/\s+/g,'');
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length ;i++) {
    let compareLetter = sentence[i];
    let count = 0;
    for (let letter of sentence) {
      if (compareLetter === letter) {
        count++
      }
    }
    letterCount[compareLetter] = count;
  }
  return letterCount;
};

//Test Code
assertObjectEquals(countLetters("oh things Good"), { o: 3, h: 2, t: 1, i: 1, n: 1, g: 2, s: 1, d: 1 });
console.log(countLetters("oh things Good"));
console.log( countLetters("lighthouse in the house"));
console.log( countLetters(" liGhthoUse In the house "));
