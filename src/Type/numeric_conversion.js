/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc numeric conversion
  *
  * @see {@link * https://javascript.info/type-conversions#numeric-conversion}
  */
'use strict';

// Numeric conversion
console.log(+true); // return 1
console.log(+''); // return 0 
console.log(+' '); // return 0 

// case 1 conversion string to number

let num1 = '6';
let num2 = '7';

console.log(+num2 + -num1); // 1

// case 2 conversion number literal to string

console.log('2' + 1 + 1); //  211, the eval order is (("2" + 1) + 1) => ("21" + 1) => "211"
console.log(1 + 1 + '2'); // 22, the eval order is ((1 + 1) + "2") => (2 + "2") => "22"