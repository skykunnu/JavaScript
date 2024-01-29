// Static vs Live list 

// querySelectorAll will gives us static list-->(Node list)--> More Preferred.
// getElementsBySomething gives us live list-->(HTML Collection)-->Sometimes it takes extra Spaces.

const UL=document.querySelector(".todo-list");
// const listItems=document.querySelectorAll(".todo-list li");
const  listItems=UL.getElementsByTagName("li");
const sixthli=document.createElement("li");
sixthli.textContent="item 6";

UL.append(sixthli);
console.log(listItems);