const assertArraysEqual =  require('./assertArraysEqual');

//function to return the mid elements of an array
const middle = (array) => {
  let length = array.length;
  if (length > 2) {
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

module.exports = middle;