/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc How to access and add properties to an object
  *
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/objetos-basicos/}
  */

'use strict';

const cat = {
  name: 'Gara',
  age: 4,
  color: 'black and white',
  sex: 'female'
};

// Accessing the properties of an object
console.log('----Accessing the properties of an object----');
console.log('\nNotation with points');
console.log(`name: ${cat.name}`);
console.log(`age: ${cat.age}`);
console.log(`color: ${cat.color}`);
console.log(`sex: ${cat.sex}`);

console.log('\nNotation with square brackets');
console.log(`name: ${cat['name']}`);
console.log(`age: ${cat['age']}`);
console.log(`color: ${cat['color']}`);
console.log(`sex: ${cat['sex']}`);

// Add properties to an object
console.log('\n----Add properties to an object----');
cat.hair = 'long';
cat['state'] = 'happy';
Object.entries(cat).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});



