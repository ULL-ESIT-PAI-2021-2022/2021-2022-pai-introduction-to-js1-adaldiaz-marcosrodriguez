/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc How let declaration works 
  *
  * @see {@link * https://cybmeta.com/var-let-y-const-en-javascript}
  */
'use strict';

let i = 1;
function example1() {
    let j = 2;
    if(true) {
        console.log(i); // 1
        console.log(j); // 2
    }
    i = 30;
}
example1();
console.log(i); // 30

function example2() {
    let k = 0;
    if(true) {
        let k = 1;
        console.log(k); // 1
    }
    console.log(k); // 0
}
example2();

function example3() {
    if(true) {
        let a = 1;
    }
    console.log(a); // ReferenceError: i is not defined
}
example3();
