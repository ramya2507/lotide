const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4 \u26D4 \u26D4 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function to return the first element of the array
const head = function(array) {
  if (array === undefined) {
    return undefined;
  } else {
    return array[0];
  }
};

//Test Code
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");