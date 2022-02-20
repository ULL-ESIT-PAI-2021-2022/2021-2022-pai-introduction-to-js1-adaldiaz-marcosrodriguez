/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc How var declaration works 
  *
  * @see {@link * https://cybmeta.com/var-let-y-const-en-javascript}
  */
'use strict';

var i = 'global';
function example1() {
    i = 'local';
    console.log(i); // Local
}
example1(); 
console.log(i); // Local

var i = 'global';
function example2() {
    var i = 'local'; 
    console.log(i); // Local
}
example2();
console.log(i); // global

function example3() {
    var i = 'local';
}
console.log(i); // Global