const assertArraysEqual =  require('./index').assertArraysEqual;

//function that imitates array map function
const map = function(array,callback) {
  const results = [];
  for (let arr of array) {
    results.push(callback(arr))
  }
  return results;
}



//Test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);
const numbers = [ 1, 2, 3, 4]
const results2 = map(numbers,num => num*2);
assertArraysEqual(results2, [2, 4, 6, 8]);
const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);