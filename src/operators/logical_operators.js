/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc Logical operators
  *
  * @see {@link * https://javascript.info/logical-operators}
  */
'use strict';

let x = 5;
let y = 8;

// && => logic AND operator
console.log(x < 2 && y == 8); // False
console.log(x == 5 && y == 8); // True

// || => logic OR operator
console.log(x < 2 || y == 8); // True
console.log(x == 5 || y == 16); // True

// ! => logic NOT
console.log(!x < 2); // True
console.log(!x == 5); // False

/**
 * As we know with these three operators you can create all logical operators
 * Demostration with code
 */

function xor(statement1, statement2) {
    return (statement1 !== statement2);
}

function nand(statement1, statement2) {
    return (!(statement1 && statement2))
}

function nor(statement1, statement2) {
    return (!(statement1 || statement2))
}

// Creating other logical operators
console.log(xor(true, false)); // true
console.log(xor(true, true)); // false

console.log(nand(true, true)); // False
console.log(nand(false, false)); // True

console.log(nor(false, false)); // True
console.log(nor(true, false)); // False