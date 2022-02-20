/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 16.feb.2022
  * desc @desc Examples of number static Method
  *
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number}
  */
'use strict';

import {notANumber, biggestNumber, minSafeInteger} from './properties.js';

// Static Methods
console.log('\n-----Static Methods----- \n');
console.log('(isNaN) Is not a number?');
if (Number.isNaN(notANumber)) console.log('This Number is NaN');
console.log('(isFinite) Is a finite number?');
if (Number.isFinite(biggestNumber)) console.log('This Number is finite');
console.log('(isInteger) Is a integer number?');
if (Number.isInteger(minSafeInteger)) console.log('This Number is integer');
console.log('');

const str = '3.2';
const num = 1;
let result;

console.log(`(ParseInt) This method transform a string to int: ${ result = Number.parseInt(str) * num}`);
console.log(`${result} is a integer?: ${Number.isInteger(result)}`);
console.log(`(ParseFloat) This method transform a string to float: ${result = Number.parseFloat(str) * num}`);
console.log(`${result} is a integer?: ${Number.isInteger(result)}`);