/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Different ways to iterate an array
  *
  * @see {@link * https://dev.to/duxtech/6-maneras-de-iterar-un-array-3fbm}
  */
'use strict';

const array = ['a', 'b', 'c'];

// for
console.log('1. for');
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// while
console.log('\n2. while');
let iterator = 0;
while (iterator < array.length) {
  console.log(array[iterator]);
  iterator++;
}

// do while
console.log('\n3. do..while');
iterator = 0;
do {
  console.log(array[iterator]);
  iterator++;
} while(iterator < array.length);

// for..in
// Loop over the positions of an array
console.log('\n4. for..in');
for (const index in array) {
  console.log(array[index]);
}

// for..of 
// Loop over the elements of an array
console.log('\n5. for..of');
for (const element of array) {
  console.log(element);
}

// map
console.log('\n6. map');
array.map(item => console.log(item));
console.log(array.map(item => item));

// forEach
console.log('\n7. forEach');
array.forEach(item => console.log(item));