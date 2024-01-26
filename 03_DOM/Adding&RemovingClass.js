// Adding & Removing the New classes.


const sectionTodo=document.querySelector(".section-todo");
// console.log(sectionTodo.classList); // this will tells us about no of classes.
// sectionTodo.classList.add('bg-dark'); // add function is used to add the new class. 
// sectionTodo.classList.remove("container"); // remove function is used to remove the class.
const ans=sectionTodo.classList.contains("container"); // checks whether there is a class or not. 
// console.log(ans);

// sectionTodo.classList.toggle("bg-dark"); // toggle function adds the class when it is not present and remove the class when it is present.

const header=document.querySelector(".header");
// console.log(header.classList);
header.classList.add("bg-dark");
console.log(header.classList); // Even after adding new class (bg-dark), the properties of the new-class is still not visible. that is becoz the header element has two classes (header and bg-dark) and in css they would have been declared in different order say bg-dark first and then header class , but In Css the browser renders from top to bottom first the bg-dark class would have been executed and then header class being executed. therefore As per the procedure the properties of bg-dark class is being overided by the header class.








