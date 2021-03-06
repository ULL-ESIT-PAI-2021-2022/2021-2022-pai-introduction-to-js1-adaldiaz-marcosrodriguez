/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Examples of adding and deleting items in an array
  *
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/arrays/}
  */
'use strict';

let array = ['a', 'b', 'c'];

// Access to items
console.log('Access to items');
console.log(`Length of the array: ${array.length}`);
console.log(`Value in an array position: ${array[0]}`);

// Method to add and delete elements
console.log('\n----Methods for adding and deleting elements in array----');
console.log(`Length of the array: ${array.length}, Current array: [${array}]`);

// Push
console.log('\n1. push');
console.log('- Add an element at the end of the array');
console.log(`Length of the array: ${array.push('d')}, Current array: [${array}]`);
console.log('- Add multiple elements at the end of the array');
console.log(`Length of the array: ${array.push('e' , 'f')} , Current array: [${array}]`);

// Pop
console.log('\n2. pop');
console.log(`Extract the last element:: ${array.pop()}`);
console.log(`Length of the array: ${array.length}, Current array: [${array}]`);

// Unshift
console.log('\n3. unshift');
console.log('- Add an element at the beginning of the array');
console.log(`Length of the array: ${array.unshift('r')}, Current array: [${array}]`);
console.log('- Add multiple elements to the start of the array');
console.log(`Length of the array: ${array.unshift('s' , 't')} , Current array: [${array}]`);

// Shift
console.log('\n4. shift');
console.log(`Extract the first element: ${array.shift()}`);
console.log(`Length of the array: ${array.length}, Current array: [${array}]`);

// Concat
console.log('\n5.concat');
array = array.concat('a', 'b', 'c');
console.log(`Length of the array: ${array.length}, Current array: [${array}]`);
array = array.concat(['a', 'b', 'c']);
console.log(`Length of the array: ${array.length}, Current array: [${array}]`);

