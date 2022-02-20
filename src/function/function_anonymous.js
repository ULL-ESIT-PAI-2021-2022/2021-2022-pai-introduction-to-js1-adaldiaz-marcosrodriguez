/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc anonymous function
  * functionA = new Function("return 'Hello';")
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/funciones/}
  */
 'use strict';

const greet = function () {
    return "Hello";
};

console.log(greet); // ƒ () { return 'Hello'; }
console.log(greet()); // 'Hello'