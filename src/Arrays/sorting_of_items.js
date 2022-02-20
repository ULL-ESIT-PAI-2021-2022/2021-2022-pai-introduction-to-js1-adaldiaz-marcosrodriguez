/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Methods to sort the arrays
  *
  * @see {@link * }
  */
'use strict';

const array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];
const array_num = [1, 6, 4, 3, 7, 8];

// Reverse method. Modify the original array
console.log('\nReverse method');
array.reverse(); // ['Zoe', 'Mauricio', 'Bernardo', 'Ana', 'Alberto']
console.log(array.map(item => item));

// Sort method. Modify the original array
console.log('Sort method');
array.sort(); // ['Alberto', 'Ana', 'Bernardo', 'Mauricio', 'Zoe']
console.log(array.map(item => item));

array_num.sort(); // [1, 3, 4, 6, 7, 8]
console.log(array_num.map(item => item));

// Sort with comparation function
const fc = (a, b) => b - a;
console.log('Sort method with comparation function');
array_num.sort(fc); // [8, 7, 6, 4, 3, 1]
console.log(array_num.map(item => item));






