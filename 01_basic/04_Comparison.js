// console.log("2">1); // "2" is converted to a number by JS, that is why the output is true. 
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0); 
/*The reason is that an equality check == and comparison >< >= <= works differently.
comparisons convert null to a number, treating it as 0
that's why null >=0 is true and null>0 is false.
*/

// console.log(undefined==0); false
// console.log(undefined>0); false
// console.log(undefined<0); false

//=== (Strict check)
console.log("2"== 2); //true because equality operator change it a number. 
console.log("2"===2); //false because strict equal don't change the datatype. 