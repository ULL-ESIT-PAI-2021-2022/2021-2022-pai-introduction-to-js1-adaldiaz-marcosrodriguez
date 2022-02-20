/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Methods for creating small arrays derived from other variables or objects.
  *
  * @see {@link * }
  */

"use strict"

let array = ["a", "b", "c", "d", "e"];
console.log("---- Methods for creating small arrays derived from other variables or objects ----");
console.log("1. Slice");
// Extracts elements from the initial position to the final position without including. DOES NOT MODIFIES THE ARRAY
console.log(`Return: [${array.slice(2, 4)}], current array: [${array.map(item => item)}]`);

console.log("\n 2. Splice");
// Extracts elements from the initial position to the final position without including. MODIFIES THE ARRAY
console.log(`Return: [${array.splice(2, 4)}], current array: [${array.map(item => item)}]`);
// In this version it also adds the following elements from the initial position. MODIFIES THE ARRAY
console.log(`Return: [${array.splice(0, 1, "c", "d")}], current array: [${array.map(item => item)}]`);

console.log("\n 3. Join");
// Returns a string with the elements of an array joined by the value we indicate
console.log(`Return: ${array.join(".")}`);

console.log("\n 4. Array.from()");
// An array is generated from a string
console.log(`array: [${Array.from("Hola").map(item => item)}]`);
