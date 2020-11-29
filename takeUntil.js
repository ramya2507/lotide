const assertArraysEqual =  require('./index').assertArraysEqual;

//Function return the array until the condition in the call back function is met
const takeUntil = function(array, callback) {
  let result = [];
  for (let arr of array) {
    if (!callback(arr)) {
      result.push(arr);
    } else {
      return result;
    }
  }
}


//Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
