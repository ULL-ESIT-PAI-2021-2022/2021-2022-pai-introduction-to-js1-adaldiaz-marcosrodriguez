/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Adal Díaz Fariña, Marcos Rodríguez Vegas 
  * @since 17.feb.2022
  * desc @desc Basic loops found in other programming languages
  *
  */
'use strict';

let iterator = 0;
// While loop
console.log("while");
while (iterator < 5) {
  console.log(`Value of iterator = ${iterator}`);
  iterator++;
}

// do..while
console.log("\ndo..while")
iterator = 0;
do {
  console.log(`Value of iterator = ${iterator}`);
  iterator++;
} while(iterator < 5);

// for loop
console.log("\nfor");
for (let i = 0; i < 5; i++) {
  console.log(`Value of i = ${i}`);
}

// Multiple increase
console.log("\nfor multiple increase");
for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log("Valor de i y j: ", i, j);
}

