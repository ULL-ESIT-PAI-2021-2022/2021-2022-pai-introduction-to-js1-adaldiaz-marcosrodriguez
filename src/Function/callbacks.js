/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc callbacks
  * 
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/funciones/}
  */
'use strict';

// fB = function B
const fB = function () {
    console.log('function B execute.');
};
  
// fA = function A
const fA = function (callback) {
    callback();
};
  
fA(fB);