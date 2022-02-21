/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc comparators
  *
  * @see {@link * https://javascript.info/comparison}
  */
'use strict';


// equal operator

let x = 5;
console.log('x = 5');
// ==; this operator Does not care about type only cares about value
console.log('x == 5  ' + (x == 5)); // True, same type and value
console.log('x == 8  ' + (x == 8)); // False, same type but not same value
console.log('x == "5"  ' + (x == '5')); // True, same value but not same type

// ===; this operator cares about type and value
console.log('x === 5  ' + (x === 5)); // True, same type and value
console.log('x === 8  ' + (x === 8)); // False, same type but not same value
console.log('x === "5"  ' + (x === '5')); // False, same value but not same type

// !=; The opposite of '=='
console.log('x != 5  ' + (x != 5)); // False, same type and value
console.log('x != 8  ' + (x != 8)); // True, same type but not same value
console.log('x != "5"  ' + (x != '5')); // False, same value but not same type

// !==; The opposite of '==='
console.log('x !== 5  ' + (x !== 5)); // False, same type and value
console.log('x !== 8  ' + (x !== 8)); // True, same type but not same value
console.log('x !== "5"  ' + (x !== '5')); // True, same value but not same type

// greater than
console.log('x > 5 ' + (x > 5)); // False
console.log('x > 2 ' + (x > 2)); // True
// greater or equal than
console.log('x >= 5' + (x >= 5)); // True
console.log('x >= 2' + (x >= 2)); // False
// less than 
console.log('x < 5 ' + (x < 5)); // False
console.log('x < 100 ' + (x < 100)); // True
// less equal than
console.log('x <= 5 ' + (x <= 5)); // True
console.log('x <= 2 ' + (x <= 2)); // True;