/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc function as expression
  * functionA = function functionA() {
  *     return "return object";
  * }
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/funciones/}
  */
'use strict';

const greeting = function greet() {
    return "hello";
};

console.log(typeof greeting());
console.log(typeof greeting);