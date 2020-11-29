const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(JSON.stringify(result),JSON.stringify(["Lighthouse", "Labs"]));