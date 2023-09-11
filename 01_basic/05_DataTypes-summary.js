// # Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue=100.3 // number
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
// console.log(id===anotherid); false although given values are same to both because symbol makes the value unique.  

// const bigNumber=23456789122334n // big int 
//----------------------------------------------------------
// Reference (Non Primitive)
// The return type of all the non primitive datatypes are object. 
// Array, Objects, Functions 

const heros=["Shaktiman","Naagraj","doga"];
let myobj={
    name:"Shikhar",
    age: 22,
}

const myFunction=function(){
    console.log("hello World");

}
console.log(typeof bigNumber); // undefined.
console.log(typeof myFunction); // function object.
//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)
// whenever we define variables in primitive datatypes, We get the copy of the variable in stack, whatever changes in the variable will reflect in the copied variable only.
// whenever we define variables in Non-primitive datatypes, We get the (Referance)Original-value of the variable in Heap, whatever changes in the variable will reflect in the original variable only.  
let mySchoolname="Shikhar"
let anotherName=mySchoolname
anotherName="Kunnu"

console.log(mySchoolname);
console.log(anotherName);