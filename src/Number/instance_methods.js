/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 16.feb.2022
  * desc @desc Examples of number instance methods
  *
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number}
  */
'use strict';

// Instance Methods
console.log("\n-----Instance Methods----- \n");
// Return a string representing the number in a exponential notation
const exponential = (num, decimals) => Number.parseFloat(num).toExponential(decimals);
console.log(`(toExponential) Number 123456 in exponential notation: ${exponential(123456, 2)}`); // expected output: 1.23e +5
// Returns a string representing the number in fixed-point notation.
const fixed = (num, decimals) => Number.parseFloat(num).toFixed(decimals);
console.log(`(toFixed) Number 12.12345 in fixed-point notation: ${fixed(12.12345 , 4)}`); // expected output: 12.1235
// Returns a string representing the number to a specified precision in fixed-point or exponential notation
const precision = (num, value) => num.toPrecision(value); // expected output: 12.12
console.log(`(toPrecision) Number 12.12345 in a specified precision in fixed-point or exponential notation ${precision(12.12345, 4)}`);