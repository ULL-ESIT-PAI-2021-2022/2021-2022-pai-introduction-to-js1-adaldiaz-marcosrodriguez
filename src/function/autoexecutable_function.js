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

// Function autoexecutable 
(function () {
    console.log("hello!!");
})();

// Function autoexecutable with parameters
(function (name) {
    console.log(`hello, ${name}!`);
})("Joan");


const f = (function (name) {
    console.log(`hello, ${name}!`);
})("Joan");
  
f; // 'hello, Joan`
console.log(typeof f); // 'string'