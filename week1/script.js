"use strict";

// import libraries
const _ = require("lodash");
// never use "var", use const or let instead

// Exercise 1
console.log("Hello world, I'm Node");

// Exercise 2
let output = "Testing nodemon, using lodash to convert this to camel case";
console.log(output);
output = _.camelCase(output);
console.log(output) 