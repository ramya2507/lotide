const assertEqual = require('./assertEqual');

//Function implementation of countOnly
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let itemsCounted = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      let count = 0;
      for (let elements of allItems) {
        if (item === elements) {
          count++;
        }
      }
      if (count > 0) {
       itemsCounted[item] = count;
      }
    }
  }
  return itemsCounted;
}

//Test Code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);