/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc callbacks 2
  * 
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/funciones/}
  */
 'use strict';

// fB = function B (callback)
const fB = function () {
    console.log("function B executed.");
  };
  
  // fError = function Error (callback)
  const fError = function () {
    console.error("Error");
  };
  
  // fA = function A
  const fA = function (callback, callbackError) {
    const n = Math.floor(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
  };
  
  fA(fB, fError);