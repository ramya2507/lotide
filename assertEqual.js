//Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u2705 \u2705 \u2705 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("\u26D4 \u26D4 \u26D4 Assertion Failed: " + actual + " !== " + expected);
  }
};

//Test Code
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 12);