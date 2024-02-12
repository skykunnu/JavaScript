// Callbacks in Synchronous Programming

// function myFunc(Callback){ // here we have passed callback as a parameter in a function that will invoke some other function. 
//     console.log("Function is doing some task 1");
//     Callback();
// }


// myFunc(()=>{
//     console.log("Function is doing some task 2");
// });


// onSucess & onFailure callbacks


// function getTwoNumbersAndadd(number1, number2,callback){
// if(typeof number1==="number" && typeof number2==="number"){
//     callback(number1,number2);
// }
// else{
//     console.log("Wrong Data Type");
// }
    
// }
// /* No Need to make a extra function */
// // function addTwoNumbers(num1,num2){
// //     console.log(num1+num2);
// // }

// getTwoNumbersAndadd(4,5,(num1,num2)=>{
//     console.log(num1+num2);
// });

//using two callbacks--> onSuccess & onFailure

// function getTwoNumbersAndadd(number1, number2,onSuccess,onFailure){
//     if(typeof number1==="number" && typeof number2==="number"){
//         onSuccess(number1,number2);
//     }
//     else{
//         onFailure();
//     }
//     }


//     /* No Need to make a extra function */
//     // function addTwoNumbers(num1,num2){
//     //     console.log(num1+num2);
//     // }
    
//     getTwoNumbersAndadd(4,5,(num1,num2)=>{
//         console.log(num1+num2);
//     },()=>{
//         console.log("Wrong Data type.");
//         console.log("Please pass numbers only.");
//     });

//------------------------------------------------------------------------------------------------------------

//Callbacks using Asynchronous Programming 
//callbacks, callback hell, pyramid of doom



const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");


//callback Hell--> Nested callbacks.
setTimeout(()=>{
    heading1.textContent="One"
    heading1.style.color="violet"
    setTimeout(()=>{
        heading2.textContent="Two"
        heading2.style.color="Purple"
        setTimeout(()=>{
            heading3.textContent="Three"
            heading3.style.color="red"
            setTimeout(()=>{
            heading4.textContent="Four"
            heading4.style.color="Pink"
            setTimeout(()=>{
                heading5.textContent="Five"
                heading5.style.color="Green"
                setTimeout(()=>{
                heading6.textContent="Six"
                heading6.style.color="blue"
                setTimeout(()=>{
                heading7.textContent="Seven"
                heading7.style.color="Brown"
                },1000)
                },1000)
            },1000)
            },1000)
        },1000)
    },1000)
},1000);

































