//synchronus programming vs asynchronus programming

// Javascript is synchronous single threaded


//synchronus programming --> one by one (first one task will be finished and then another task will be finished)
// console.log("Script start");
// for(let i=1;i<10000;i++){
//     console.log("inside for loop");
// }
// console.log("Script end");


// on Consoling above code,  the output is -->
/*Script start
inside for loop
Script end
*/

//Asynchronous Programming

setTimeout
console.log("script start");

//setTimeout syntax
const timeout=setTimeout(()=>{
    console.log("hello");
}, 1000); // (function you want to run, time after which you want to run the function(milisec))
clearTimeout(timeout); // with this statement it will stop the execution of setTimeout function. 
console.log("Script end");

// On Consoling above code, the output-->
/*
1. Script start
2. Inside setTimeout
3. Script end
*/




