/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc String method and properties built-in that are commonly use
  *
  * @see {@link * https://javascript.info/types#string}
  */
'use strict';


// Length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

console.log(`The lenght of the text (${txt}) is:` + length);

// Get the char At
txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(`the last letter of the alphabet is ${txt[txt.length - 1]} and the first one is ${txt[0]}`)

// Slice
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

console.log(`Slice this: ${str} output: ${part}`);

str = "Apple, Banana, Kiwi";
part = str.slice(-12, -6); // A difference way, same output

// substring
str = "Apple, Banana, Kiwi";
part = str.substring(7, 13); // it can do the same that slice but this does not accept negative indexes

// replace
let text = "Please buy bananas!";
let newText = text.replace("bananas", "apples");

console.log(`.replace() can replace this "${text}" to this "${newText}"`);

text = "My ID is: 7856424875";
newText = text.replace(/[0-9]+/, "XXXXXXXX");

console.log(`.replace() can replace this "${text}" to this "${newText}" using a regular expresion `);

// toUpperCase
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

console.log(`You can shout out loud "${text1}" with toUpperCase "${text2}"`);

// toLowerCase
text1 = "Hello World!";       // String
text2 = text1.toLowerCase();  // text2 is text1 converted to lower

// concat
text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2);

// trim
text1 = "      Hello World!      ";
text2 = text1.trim();

console.log(`You can use trim to sanitize your inputs this: "${text1}" to this "${text2}"`);

// padding
text = "5";
let padded = text.padStart(6,0);

console.log(`You can use padStart() to prefix a string to another one like this: "${text}" to this "${padded}"`);

// split
text = "My name is Bruno";

console.log(text.split(" "));