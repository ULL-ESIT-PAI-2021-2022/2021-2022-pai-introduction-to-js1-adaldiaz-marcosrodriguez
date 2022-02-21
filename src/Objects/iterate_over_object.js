/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Different ways to iterate an object
  *
  * @see {@link * https://dev.to/duxtech/5-maneras-de-iterar-un-objeto-en-javascript-jkn/}
  */
'use strict';

const cat = {
  name: 'Gara',
  age: 4,
  color: 'black and white',
  sex: 'female'
};

// Object.keys()
console.log('\n1. Use Object.keys() to iterate'); 
let key;
let keys = Object.keys(cat); // keys = ['name', 'age', 'color', 'sex']
for (let i = 0; i < keys.length; i++) {
  key = keys[i];
  console.log(`${key}: ${cat[key]}`);
}

// Object.values();
console.log('\n2. Use Object.values() to iterate the values');
let values = Object.values(cat); // values = ['Gara', 4, 'black and white', 'female']
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}


console.log('\n3. for..in');
// Loop over the key of an array
for (const property in cat) {
  console.log(`${property}: ${cat[property]}`);
}

console.log('\n#. for..of error');
// Loop over the elements of an array
try {
  for (const element of cat) {
    console.log(element);
  }
} catch(e) {
  console.log('Error. Object is not iterable');
  // throw e;
}

// Object.entries() and for..of
console.log('\n4. Use Object.entries() with for..of');
for (const [key, value] of Object.entries(cat)) {
  console.log(`${key}: ${value}`);
}

// Object.entries() and forEach
console.log('\n5. Use Object.entries() with forEach()');
Object.entries(cat).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


