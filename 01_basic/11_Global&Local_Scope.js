// Global & Local Scope.
/* 
Global Scope mainly consists of two scope:- Windows object and Script scope, there is a local scope also which is defined only when there
is a function invokation otherwise not, on completing execution it will be destroyed from the global scope. 

Variables with var & function declaration are defined inside windows object.
while variables with let & const are defined inside script scope. 
*/


// Variables like userName, userAge and a can be accessed anywhere like inside any function or this file.
const userName="Shikhar";
let userAge="24";

var a=50;   

// x & y variables are accessed only inside the add function.
function add(){
    const x = 5;
    const y = 8;
    console.log(x+y); // 13
    console.log(userName); // Shikhar (because defined in the global scope).
}

//console.log(userName); // Shikhar (because username is defined in the global scope, so it can be used everywhere inside the editor)
//console.log(x); // x is not defined. execution will stop here, restricting further execution of code.(because the scope of x is defined inside add function)  
add();
console.log('Program Ended');