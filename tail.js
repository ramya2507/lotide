const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function returns all the elements of the array expect for first element
const tail = function(array) {
  if (array === undefined && array.length === 1) {
    return undefined;
  } else {
    return array.slice(1,array.length);
  }
};

//Test code
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(JSON.stringify(result),JSON.stringify(["Lighthouse", "Labs"]));

//Test to check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);