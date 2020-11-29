const assertEqual = require('./index').assertEqual;

//function that takes a object and return the key of when callback is truthy
const findKey = function(object,callback){
  for (let obj in object) {
    if (callback(object[obj])) {
      return obj;
    }
  }
};

//Test code
let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); 
assertEqual(results1,"noma");
let results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);
assertEqual(results2,undefined);