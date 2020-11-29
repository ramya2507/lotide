const assertEqual = require('./index').assertEqual;

//Function to return the key matching the argument value passed
const findKeyByValue = (givenObject,value) => {
  for (let key in givenObject) {
    if (givenObject[key] === value) {
     return key;
    } 
  }
};

//Test code
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);