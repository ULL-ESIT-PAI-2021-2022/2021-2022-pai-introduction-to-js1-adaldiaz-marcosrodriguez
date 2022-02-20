/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc switch statement
  *
  * @see {@link * https://javascript.info/switch}
  */
'use strict';

switch(parseInt((Math.random() * 100) % 4)) {
    case 0:
        console.log('The random number is multiple of 4');
        break;
    case 1:
        console.log('The reminder is 1');
        break;
    case 2:
        console.log('The reminder is 2');
        break;
    case 3:
        console.log('The reminder is 3');
        break;
}