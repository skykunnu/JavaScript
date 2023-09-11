// console.log("2">1); // "2" is converted by Javascript into a number that is why the output is true. 
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0); 
/*The reason is that an equality check == and comparison >< >= <= works differently.
comparisons convert null to a number, treating it as 0
that's why null >=0 is true and null>0 is false.
*/

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

//===