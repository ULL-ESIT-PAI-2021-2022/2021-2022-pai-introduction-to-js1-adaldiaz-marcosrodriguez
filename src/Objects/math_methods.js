/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc More interesting methods of Math object
  *
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/objeto-math/}
  */

'use strict'

// Mathematical methods
console.log('----Mathematical methods----\n');

// Returns the absolute value
console.log(`- (Math.abs()) Absolute value: ${Math.abs(-5)}`);

// Returns the largest number indicated by parameter
console.log(`- (Math.max()) Largest number: ${Math.max(1, 40, 5, 15)}`);

// Returns the smallest number indicated by parameter
console.log(`- (Math.min()) Smallest number: ${Math.min(1, 40, 5, 15)}`);

// Returns the raised base number to exp
console.log(`- (Math.pow()) Power: ${Math.pow(2, 10)}`);

// Returns the square root
console.log(`- (Math.sqrt()) Square root: ${Math.sqrt(2)}`);


// Math.random method
// Returns a random number between 0 and 1 with 16 decimals
console.log('\n----Math.random method----\n');
console.log(`- (Math.random()) Random number: ${Math.random()}`);
const randomNumber = Math.floor(Math.random() * 5);
console.log(`- (Math.random()) Random number between 0 and 5: ${randomNumber}`);


// ----Logarithm----
console.log('\n----Logarithm----\n');

// Returns the natural logarithm at base e of x value
console.log(`- (Math.log()) Natural logarithm at base e of 2: ${Math.log(2)}`);

// Returns the decimal logarithm (in base 10) of x value
console.log(`- (Math.log10()) Decimal logarithm (in base 10) of 2: ${Math.log10(2)}`);

// Returns the binary logarithm (in base 2) of x value
console.log(`- (Math.log2()) Binary logarithm (in base 2) of 2: ${Math.log2(2)}`);

// ----Rounding methods----
console.log('\n----Rounding methods----\n');

// Returns the rounding of x (the nearest integer)
console.log(`- (Math.round()) Rounding of 3.75: ${Math.round(3.75)}`);

// Returns the top rounding of x. (the highest integer)
console.log(`- (Math.ceil()) Top rounding of 3.75: ${Math.ceil(3.75)}`);

// Returns the lower rounding of x. (the lower integer)
console.log(`- (Math.floor()) Lower rounding of 3.75: ${Math.floor(3.75)}`);

// Truncates the number x (returns only the integer part)
console.log(`- (Math.trunc()) Truncates the number 3.75: ${Math.trunc(3.75)}`);

// ----Trigonometric methods----
console.log('\n----Trigonometric methods----\n');

// Sin
console.log(`- (Math.sin()) Sin of 3.14: ${Math.sin(1)}`);

// Asin
console.log(`- (Math.asin()) Asin of 3.14: ${Math.asin(1)}`);

// cos
console.log(`- (Math.cos()) cos of 3.14: ${Math.cos(1)}`);

// acos
console.log(`- (Math.acos()) acos of 3.14: ${Math.acos(-1)}`);

// tan
console.log(`- (Math.tan()) tan of 3.14: ${Math.tan(1)}`);

// atan
console.log(`- (Math.atan()) atan of 3.14: ${Math.atan(1)}`);

