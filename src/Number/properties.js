/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 16.feb.2022
  * desc @desc Examples of number porperties
  *
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number}
  */
'use strict';

// Porperties
console.log("\n-----Properties----- \n");
// The biggest positive representable number
export const biggestNumber = Number.MAX_VALUE;

// The smallest positive representable number
const smallestNumber = Number.MIN_VALUE;

// Special value representing a negative infinity
const negativeInfinite = Number.NEGATIVE_INFINITY;

// Special value representig a positive infinity
const positiveInfinite = Number.POSITIVE_INFINITY;

// Special "Not a Number" value.
export const notANumber = Number.NaN;

// The minimun safe integer in JavaScript
export const minSafeInteger = Number.MIN_SAFE_INTEGER;

// The maximun safe integer in JavaScript
const maxSafeInteger = Number.MAX_SAFE_INTEGER;

console.log(`(Number.MAX_VALUE) The biggest positive representable number is ${biggestNumber}`);
console.log(`(Number.MAX_SAFE_INTEGER) The maximun safe integer in JavaScript is ${maxSafeInteger}\n`);
console.log(`(Number.MIN_VALUE) The smallest positive representable number is ${smallestNumber}`);
console.log(`(Number.MIN_SAFE_INTEGER) The minimun safe integer in JavaScript is ${minSafeInteger}`);

// Number.MAX_VALUE demo 
console.log('\nNumber.MAX_VALUE demo');
function multiply(x, y) {
  return (x * y);
}

console.log(multiply(biggestNumber, 1));
// expected output: 1.7976931348623157e+308

console.log(multiply(biggestNumber, 2));
// expected output: "Process as Infinity"

console.log(biggestNumber === (biggestNumber - 1));
// expected output: true


// Number.MAX_SAFE_INTEGER demo
console.log('\nNumber.MAX_VALUE_INTEGER demo');
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// expected output: 9007199254740991

console.log(x);
// expected output: 9007199254740992

console.log(x === y);
// expected output: true