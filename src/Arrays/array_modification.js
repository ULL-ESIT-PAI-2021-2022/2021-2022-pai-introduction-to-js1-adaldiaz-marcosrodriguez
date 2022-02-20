/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Methods for modifying arrays
  *
  * @see {@link * }
  */

"use strict";

let array = ["a", "b", "c", "d", "e", "f"];
// These methods modify the original array
console.log("1. copyWithin");
// It allows us to create a copy of the array that we will alter in the following way: in the pos position we will copy the elements of the array itself that appear from the ini position to the end position. That is, from position 0 to pos it will be exactly the same,and from then on, it will be a copy of the values from position ini to position end.
console.log(`Return: [${array.copyWithin(3, 0, 3)}]`);
console.log(`Return: [${array.copyWithin(2, 0, 3)}]`);

console.log("2. fill");
// Returns a version of the array, filling in the obj element from the ini position to the end position
console.log(`Return: [${array.fill("z", 0, 5)}]`);
