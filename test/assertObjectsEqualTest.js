const assertObjectsEqual = require('../assertObjectsequal');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 