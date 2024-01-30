// Keypress event
const body=document.body;
body.addEventListener("keypress",(e)=>{
// console.log(e); // It will return KeyboardEventObject.
console.log(e.key); // It will return the keys you pressed on the keyboard.
})



// MouseOver Event--> (this event occur when you hover on it).
const mainButton=document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
    console.log("Mouseover event occured"); 
})


//Mouseleave Event--> (this event occur when you leave the mouse from the element)
mainButton.addEventListener("mouseleave",()=>{
    console.log("Mouseleave event occured");
})


