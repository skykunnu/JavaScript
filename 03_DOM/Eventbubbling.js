// event bubbling/Propogation
// event capturing
// event delegation

//The flow goes like--> Capturing->bubbling->


const grandparent=document.querySelector(".grandparent");
// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");


//Below is the concept of event bubbling.

// child.addEventListener("click",()=>{
//     console.log("bubbling on child");
// })

// parent.addEventListener("click",()=>{
//     console.log("bubbling on parent");
// })

// grandparent.addEventListener("click",()=>{
//     console.log("bubbling on grandparent");
// })
// document.body.addEventListener("click",()=>{
//     console.log("bubbling on body");
// })

// Capturing Events--> (by making third argument of addEventListner as true.)
// child.addEventListener("click",()=>{
//     console.log("Captured!!!!! on child");
// },true)

// parent.addEventListener("click",()=>{
//     console.log("Captured!!!!! on parent");
// },true)

// grandparent.addEventListener("click",()=>{
//     console.log("Captured!!!!! on grandparent");
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("Captured!!!!! on body");
// },true)



/*Event delegation--> It reduces the no of Event listners means that with single event listner you can call the remaining things associated with that element. for ex if you click on child the same output will be return as that of grandparent 
this is because it will check on its parents whether any event is triggered or not but it found that event is triggered on grandparent.
*/
grandparent.addEventListener("click",(e)=>{
console.log(e.target.textContent); /* on clicking- child --> child
 2. parent--> parent,child
 3. grandparent--> grandparent,parent,child*/
})


