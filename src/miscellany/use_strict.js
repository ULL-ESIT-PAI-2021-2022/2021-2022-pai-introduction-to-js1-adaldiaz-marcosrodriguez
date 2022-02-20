/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc Differences between using 'use strict' in a function and not using it
  *
  * @see {@link * https://javascript.info/strict-mode}
  */


function notUsingStrict(num1,num1,num1,num2,num2,num2) {
    let undefined = num1;
    let num3 = num1 + num1;
    let num4 = num3 + num4 + num2 + num2;
    let num5 = num4 + num3;

    return num5 * num5;
}

function usingStrict(num1,num1,num1,num2,num2,num2) {
    'use strict';
    let undefined = num1;
    let num3 = num1 + num1;
    let num4 = num3 + num4 + num2 + num2;
    let num5 = num4 + num3;

    return num5 * num5;
}

console.log("Not Using strict: " + notUsingStrict(1,2,3,4,5,6));
console.log("Using trict: " + usingStrict(1,2,3,4,5,6));
