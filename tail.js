const assertEqual = require('./assertEqual');

//Function returns all the elements of the array expect for first element
const tail = function(array) {
  if (array === undefined && array.length === 1) {
    return undefined;
  } else {
    return array.slice(1,array.length);
  }
};

module.exports = tail;



