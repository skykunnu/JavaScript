// Callbacks in Synchronous Programming

/* It is a function passed as an argument to another function and is intended to be
executed at a later time or under certain conditions.*/

// function myFunc(Callback){ // here we have passed callback as a parameter in a function that will invoke some other function. 
//     console.log("Function is doing some task 1");
//     Callback();
// }


// myFunc(()=>{ // callback function
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
/* No Need to make a extra function */
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// getTwoNumbersAndadd(4,5,addTwoNumbers); 

// getTwoNumbersAndadd(4,5,(num1,num2)=>{
// console.log(num1+num2);
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
/*
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
*/
 // Lets do the above task using a function.
 //using onSuccessCallback and onFailureCallback

function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
  if(element){
    element.textContent=text;
    element.style.color=color;
    if(onSuccessCallback){
        onSuccessCallback();
    }
  }
  else{
    if(onFailureCallback){
        onFailureCallback();
    }
    
  }
    },time)
}

//Pyramid of doom
changeText(heading1,"one","green",1000,()=>{
    changeText(heading2,"two","violet",2000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","blue",2000,()=>{
                changeText(heading5,"five","purple",1000,()=>{
                    changeText(heading6,"six","orange",2000,()=>{
                        changeText(heading7,"seven","brown",1000,()=>{
                        },()=>{console.log("Heading7 does'nt exist");})
                    },()=>{console.log("Heading6 does'nt exist");})
                },()=>{console.log("Heading5 does'nt exist");})
            },()=>{console.log("Heading4 does'nt exist");})
        },()=>{console.log("Heading3 does'nt exist");})
    },()=>{console.log("Heading2 does'nt exist");})
},()=>{console.log("Heading1 does'nt exist");})





























