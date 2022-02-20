/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 16.feb.2022
  * desc @desc Examples of BigInt static methods
  *
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt}
  */

"use strict";

//Static Methods
console.log("\n-----Static Methods----- \n");
// Clamps a BigInt value to a signed integer value, and returns that value.
console.log(`(asIntN) In range: ${BigInt.asIntN(64, -(2n ** 32n))}`);
console.log(`(asIntN) Out of range: ${BigInt.asIntN(64, -(2n ** 64n))}`);

// Clamps a BigInt value to an unsigned integer value, and returns that value.
console.log(`\n(asUintN) In range: ${BigInt.asUintN(64, 2n ** 32n)}`);
console.log(`(asUintN) Wrong result: ${BigInt.asUintN(64, -(2n ** 32n))}`);
console.log(`(asUintN) Out of range: ${BigInt.asUintN(64, -(2n ** 64n))}`);