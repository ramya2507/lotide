const assertArraysEqual =  require('./index').assertArraysEqual;

//function to return a subset array by removing the unwanted items
const without = (source,itemsToRemove) => {
  if (eqArrays(source,itemsToRemove)) {
    return "All the items are removed";
  }
  //create a new array to retain the value of pervious array
  let itemsAfterRemoved = [...source];
  for (let i = 0;i < itemsAfterRemoved.length ; i++) {
    for (let j = 0 ; j < itemsToRemove.length;j++) {
      if (itemsAfterRemoved[i] === itemsToRemove[j]) {
        itemsAfterRemoved.splice(i,1);
      }
    }
  }
  return itemsAfterRemoved;
};

//Test code
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);