// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3; // number
let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");
// console.log(id===anotherid); false although given values are same to same because symbol makes the value unique.

// const bigNumber=23456789122334n // big int
//---------------------------------------------------------------------------------------------------------------------

// Reference (Non Primitive)
// The return type of all the non primitive datatypes are object.
// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "doga"];
let myobj = {
  name: "Shikhar",
  age: 22,
};

const myFunction = function () {
  console.log("hello World");
};
// console.log(typeof bigNumber); // undefined.
// console.log(typeof myFunction); // function object.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

//Whenever we define variables in primitive datatypes, We get the copy of the variable in a stack, whatever changes in the original variable will reflect in the original variable only. not in the copied variable.

//Whenever we define variables in Non-primitive(Reference) datatypes, We get the (Reference)Original-value of the variable in Heap, whatever changes in the original variable will reflects in the original as well as copied variable also.
let mySchoolname = "Shikhar";
let anotherName = mySchoolname;
anotherName = "Kunnu";

console.log(mySchoolname); // Shikhar
console.log(anotherName); // Kunnu

let userOne = {
  email: "user@gmail.com",
  upi: "userbyl",
};
let userTwo = userOne;
userTwo.email = "shikhar@google.com";
console.log(userOne.email); // shihar@gmail.com
console.log(userTwo.email); // shikhar@gmail.com
