// Prototype--> Important for Interviews

// Javascript function ==> function + object

// you can add your own properties;

// whenever we create a function , function gives us a free space which is called prototype.
// Only functions provides Prototype property.

// function hello(){
//     console.log("hello world");
// }
// console.log(hello.prototype); // {}--> Object, this is a free space provided by function to prototype , to store the key value pair to be later used by function.
const hello=()=>{
    console.log("hello");
}
if(hello.prototype){
    console.log("Prototype is present");
}
else {
    console.log("prototype is not present");
}