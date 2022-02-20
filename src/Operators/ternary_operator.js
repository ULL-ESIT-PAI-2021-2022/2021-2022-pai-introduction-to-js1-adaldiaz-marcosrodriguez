/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc ternary operator '?' examples
  *
  * @see {@link * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator}
  */
'use strict';

let howitwork1 = (true) ? true: false; // true
let howitwork2 = (!true) ? true: false; // false

// Example

let howItWorkWithFunction = (true) ? functionA(): functionB(); // Function A
let howItWorkWithFunction = (!true) ? functionA(): functionB(); // Function B

function functionA() {
    return "function A";
}

function functionB() {
    return "function B";
}