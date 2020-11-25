const eqArrays = (array1,array2) => {
  if(array1.length === array2.length){
    for(let i = 0; i < array1.length; i++){
      if(array1[i] === array2[i]){

      }else{
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
//function that consoles the comparison result of two arrays
const assertArraysEqual =  (array1,array2) => {
  let result = eqArrays(array1,array2);
  if (result) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed!`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed!`);
  }
};
//function to return a subset array by removing the unwanted items
const without = (source,itemsToRemove) => {
  if(eqArrays(source,itemsToRemove)){
    return "All the items are removed";
  }
  //create a new array to retain the value of pervious array
  let itemsAfterRemoved = [];
  for(let sr of source){
    itemsAfterRemoved.push(sr);
  }
  for(let i = 0;i < itemsAfterRemoved.length ; i++){
    for(let j = 0 ; j < itemsToRemove.length;j++){
      if(itemsAfterRemoved[i] === itemsToRemove[j]){
        itemsAfterRemoved.splice(i,1);
      }
    }
  }
  return itemsAfterRemoved;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);