// Event bubbling/Propogation --> (Flow of Execution goes from child to parent).--> inside to outside
// Event capturing -->(Flow of Execution goes from parent to child)--> outside to inside
// Event delegation

// stopPropagation--> It prevents child to go to his parent element.
// stopImmediatePropagation--> 


// const grandparent=document.querySelector(".grandparent");
// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");


//Below is the concept of event bubbling.

// child.addEventListener("click",(e)=>{
//     // e.stopPropagation();// it will restrict child to go to his parents.
//     console.log("bubbling on child");
// })

// parent.addEventListener("click",(e)=>{
//     console.log("bubbling on parent");
// })

// grandparent.addEventListener("click",(e)=>{
//     console.log("bubbling on grandparent");
// })
// document.body.addEventListener("click",(e)=>{
//     console.log("bubbling on document");
// })




// Capturing Events--> (by making third argument of addEventListner as true., The One's which are true will printed out first and then the one on which the click event happened.)

// if all elements are captured then the flow will be from outside to inside.

// document.body.addEventListener("click",()=>{
//     console.log("Document capture");
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("Grandparent capture");
// },true)
// parent.addEventListener("click",()=>{
//     console.log("parent capture");
// },true)
// child.addEventListener("click",()=>{
//     console.log("child capture");
// },true)





/*Event delegation--> Event delegation is a design pattern in JavaScript where instead of attaching event listeners directly to individual elements,
 We attach them to a parent element and use that parent element to listen for events that bubble up from its descendants.
*/

// it also works on the same concept as bubbling do ( from inside to outside)
/* 1.) If we click on child --> 3 hi's will be printed out(child+parent+Grandparent).
2.)  If we click on parent --> 2 hi's will be printed out (Parent + Grandparent).
3.) If we click on Grandparent -->  1 hi will be printed out.

*/

const divs=document.querySelectorAll("div");

divs.forEach(div => {
    div.addEventListener("click",()=>{
        console.log("hi");
    })
});

