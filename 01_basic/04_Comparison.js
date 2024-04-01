// console.log("2">1); // "2" is converted to a number by JS due to type coercion, which is why the output is true.
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
console.log("2" == 2); //true because equality operator converts the operands of different types to number.
console.log("2" === 2); //false because strict equality operator don't change the datatype. ! Recommend to use wherever there is comparison needed.

// != vs !==
console.log("7" != 7); // false, because as both of them have same values. No matter whatever the datatype is.
console.log("7" !== 7); // true, because it checked the datatypes of both the value and found it different.

//-----------Truthy & Falsy Values---------------------------

// Falsy Values-
/*
1. false
2. " " -> Empty String.
3. null
4. undefined
5. 0
*/

// Truthy Values-
/* Other than Falsy values all are truthy values. */
