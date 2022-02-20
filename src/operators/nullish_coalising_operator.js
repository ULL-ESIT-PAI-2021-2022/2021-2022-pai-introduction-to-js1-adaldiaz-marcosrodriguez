/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc nullish coalising operator, return the defined variable or the not null variable
  * 
  * @see {@link * https://javascript.info/nullish-coalescing-operator}
  */
'use strict';

let undefinedVariable; // Reminder: the default value of this declaration is undefined
let number = 10;

console.log(undefinedVariable ?? number);

