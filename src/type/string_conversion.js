/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc String method and properties built-in that are commonly use
  *
  * @see {@link * https://javascript.info/types#string}
  */
'use strict';

const str = "3.2";
const num = 1;
let result;

console.log(`(ParseInt) This method transform a string to int: ${ result = Number.parseInt(str) * num}`);
console.log(`${result} is a integer?: ${Number.isInteger(result)}`);
console.log(`(ParseFloat) This method transform a string to float: ${result = Number.parseFloat(str) * num}`);
console.log(`${result} is a integer?: ${Number.isInteger(result)}`);
