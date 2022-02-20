/**
  * University of La Laguna
  * Higher School of Engineering and Technology
  * Degree in Computer Engineering
  * Programming of Interactive Applications
  *
  * @author Marcos Rodríguez Vega
  * @since 16.feb.2022
  * desc @desc Example that shows why Javascript is a weakly typing language 
  *
  * @see {@link * https://www.peachpit.com/articles/article.aspx?p=25275&seqNum=4}
  */
'use strict';

 var apples = 1.43;
 var oranges = 2.33;
 var pears = 4.32;
 var tax = .04;
 var shipping = 2.75;
 var subtotal = apples + oranges + pears;
 var total = subtotal + (subtotal * tax) + shipping;
 var message = "Your total is $";
 var deliver = message + total +".";

 console.log(deliver);