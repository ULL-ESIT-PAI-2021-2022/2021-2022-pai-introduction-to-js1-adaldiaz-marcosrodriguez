/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc in this script we show example of if statements
  *
  * @see {@link * https://javascript.info/ifelse}
  */
'use strict';

// if statement examples

if (5 == "5" && 8 == "8") {
    console.log("C++ programmer: 'How in the world a string number is equal to it number literal!!'");
} else {
    console.log("Everything is okey :)");
}

// else if

let year = new Date().getYear() + 1900 
if (year <= 2021) {
    console.log("That does not make sense");
} else if (year == 2022) {
    console.log("Happy 2022!");
} else {
    console.log("How is the future going? In 2022 things are going pretty nice");
}

