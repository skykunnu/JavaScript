"use strict"; //treat all JS version as newer version and also use for error handling.
// alert(3+3) // we are using nodejs, not browser

let name = "Shikhar";
let age = 18;
let isLoggedIn = false;

//number => 2 to power 53
//bigint ,!! You cannot mix bigint with other datatypes.
let myNumber = BigInt(22); // this is also a bigInt.
myNumber = 12n; // this is also bigInt.
console.log(Number.MAX_SAFE_INTEGER); // this gives the max range of BigInt.
// string=> ""
//boolean => true/false
//null => standalone value/empty value.
//undefined => no value is assigned.
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object, it is a type of bug.
