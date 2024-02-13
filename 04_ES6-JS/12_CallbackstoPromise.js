const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");

function changeText(element,text,color,time){ // this whole function will return promise.as it will return promise we can use chaining methods like .then() & .catch().
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(element){
          element.textContent=text;
          element.style.color=color;
          resolve();
        }
        else{
          reject("Element not found")
          
        }
          },time)
})
}

const returnedPromise=changeText(heading1,"one","red",1000);

// returnedPromise.then(()=>{
//     return changeText(heading2,"Two","blue",1000); // Again, here also it is returning Promise. if we had not use return then it would immediately return the promise which we do not want. 
// }).then(()=>{
//     return changeText(heading3,"Three","Green",1000);
// }).then(()=>{
//     return changeText(heading4,"Four","Purple",1000);
// }).then(()=>{
//     return changeText(heading5,"Five","Orange",1000);
// }).then(()=>{
//     return changeText(heading6,"Six","Red",1000);
// }).then(()=>{
//     return changeText(heading7,"Seven","Brown",1000);
// })

// More simpler way to do above task--> by removing return and curly brackets

// For ex- if any thing is rejected it will first execute catch method and then execute remaining then methods.
 
returnedPromise.then(()=>changeText(heading2,"Two","blue",1000)) // Again, here also it is returning Promise. if we had not use return then it would immediately return the promise which we do not want. 
.then(()=>changeText(heading3,"Three","Green",1000))
.then(()=>changeText(heading4,"Four","Purple",1000))
.then(()=>changeText(heading5,"Five","Orange",1000))
.then(()=>changeText(heading6,"Six","Red",1000))
.then(()=>changeText(heading7,"Seven","Brown",1000))
.catch((error)=>{
    alert("error");
})