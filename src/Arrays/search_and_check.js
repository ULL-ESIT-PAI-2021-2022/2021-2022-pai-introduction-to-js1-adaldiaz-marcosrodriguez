/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Array search and check methods
  *
  * @see {@link * }
  */

"use strict"

let array = ["a", "b", "c", "a", "d", "e", "b"];
console.log("\n----Methods for adding and deleting elements in array----");

// Array.isArray
console.log("1. Array.isArray");
console.log(`Is this an Array?: ${Array.isArray(array)}`);
// Includes
console.log("\n2. includes");
console.log(`Is item "a" included?: ${array.includes("a")}`);
console.log(`Is item "a" included from position 2?: ${array.includes("a", 2)}`)
// indexOf
console.log("\n3. indexOf");
console.log(`Position of item "a": ${array.indexOf("a")}`);
console.log(`Position of item "a", from position 2: ${array.indexOf("a", 2)}`);
// lastIndexOf
console.lg("\n4. lastIndexOf");
console.log(`Position of item "b": ${array.lastIndexOf("b")}`);
console.log(`Position of item "h": ${array.lastIndexOf("h")}`);

