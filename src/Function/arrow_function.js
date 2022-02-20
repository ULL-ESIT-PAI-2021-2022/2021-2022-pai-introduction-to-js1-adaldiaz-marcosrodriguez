/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc arrow Function
  * 
  * @see {@link * https://lenguajejs.com/javascript/fundamentos/funciones/}
  */

const func = () => {
    return "arrow Function or 'fat arrow' function.";
};

console.log(func());

// simplified
const func = () => "arrow function"; // 0 parameter: arrow function
const func = (e) => e + 1; // 1 parameter: return e + 1
const func = (a, b) => a + b; // 2 parameters: return a + b