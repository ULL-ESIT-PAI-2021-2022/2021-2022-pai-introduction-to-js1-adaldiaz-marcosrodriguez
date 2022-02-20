/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc function declaration
  * function name(parameter1, parameter2, ... parameterN) {
  *     ...body...
  * }
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/funciones/}
  */
'use strict';

function helloWorld() {
    console.log('Hello world!');
}

helloWorld();
helloWorld();

function getDate() { // Returning a value
    return new Date().toDateString();
}
console.log(getDate())