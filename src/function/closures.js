/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc closures. Functions that preserves the information store  in the variables within it block
  * 
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence}
  */
 'use strict';

// Closure: Closure incr()
const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
})();
  
typeof incr; // 'function'
console.log(incr()); // 1
console.log(incr()); // 2
console.log(incr()); // 3