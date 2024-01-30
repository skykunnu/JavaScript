// Intro to Events
// Clicks,button Press,Hover


//1.) addEventListner
// const btn=document.querySelector(".btn-headline");


// //using regular function
// btn.addEventListener("click",function(){
//     console.log("Voila!!, you clicked me using regular function");
// })

// //using arrow function
// btn.addEventListener("click", ()=>{
//     console.log("Voila!!, you clicked me using arrow function");
// } );


//using This keyword
// const btn=document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("Voila!!, you clicked me using regular function");
//     console.log(this); // this will point to btn only not to the window object (Regular function), and for arrow function this keyword will point to windows object.

// })

//EventListners on multiple buttons
// const firstButton=document.querySelectorAll(".my-buttons button");

/* You can use any type of loop but not any type of function(like arrow function).*/

// for(let button of firstButton){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);// it will print the text inside the button.
//     })    
// }

// firstButton.forEach( function(button) {
//     button.addEventListener("click",function(){
//         console.log(this.textContent);// it will print the text inside the button.
//     }) 
// });

//------------------------------------------------------------------------------------------------------


// Event Object
// const firstbutton=document.querySelector("#one");
// firstbutton.addEventListener("click",function(Event){ // the function will take an event as an input.
//     console.log(Event); // return an object name as Pointer Event.
// })



/* whenever we add event listner to an element 
then browser comes to know that event is being perform, 
browser will perform two things.

1. it will give callback function to js engine.
2. with callback function whatever event is being performed , its information will be given in terms of an object.
*/


// Current target and target
/* target--> which element triggered our event
   Current target--> which element we attached our eventlistner. 
*/




// Behind the scenes of Events
/* 
Browser-->  JS Engine(V8)-{V8 translates js code directly into machine code} + WebApi
*/




























