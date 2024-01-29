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