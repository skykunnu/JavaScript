// DOM --> Document Object Model 

/* 1. Select element using get element by id*/

// console.log(document.getElementById('main-heading'));
// console.dir(document.getElementById('main-heading')); // this will return an object of an element selected with document.

// In JS, it converts every html element into a object.

//-------------------------------------------------------------------------------------------------------------------------------------------
/* Select element by query selector */

// const navitem=document.querySelector(".nav-item"); // only the first ever element  will be printed. rest all remaining elements with same class name will be ignored.  
// console.log(navitem);

// To Print all the elements having class nav-item.
// const allnavitem=document.querySelectorAll(".nav-item");
// console.log(allnavitem); // all elements with same class name will be printed out in the form of node list, but it is not in the form of array.

//---------------------------------------------------------------------------------------------------------------------------------------------------------
/* change text
textContent and innertext
*/

// const mainHeading=document.getElementById("main-heading")
// console.log(mainHeading.textContent); // whatever text is there in main-heading will be printed out. 

// mainHeading.textContent="this is something else.";
// console.log(mainHeading.textContent); // textContent will not display hidden items, but in output it will display hidden items.
// console.log(mainHeading.innerText); // whatever there is in the output the same will be visible on the window.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

/* change the styles of elements. */

// const mainHeading=document.querySelector("div.headline h2");
// console.log(mainHeading.style.backgroundColor='orange');


/* get and set attributes */

// const link=document.querySelector("a");
// console.log(link.getAttribute('href'));
// link.setAttribute("href","https://google.com")
// console.log(link.getAttribute('href'));

// const input=document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));


//------------------------------------------------------------------------------------------------
// get multiple element using detElement by className
// get multiple element items using querySelectorAll
// const navItem=document.getElementsByClassName("nav-item");
// console.log(navItem); // HTML Collection.
// const navItem=document.querySelectorAll(".nav-item");
// console.log(navItem[1]); // Node List
//-------------------------------------------------------------------------------------------------



/* Simple for loop */

// for(let i=0;i<navItem.length;i++){
//     const navItems=navItem[i];
//     navItems.style.backgroundColor="#fff";
//     navItems.style.color="green";
//     navItems.style.fontWeight="bold";
// }


/* forOf loop */

// for(let navItems of navItem){
//     navItems.style.backgroundColor="#fff";
//         navItems.style.color="green";
//         navItems.style.fontWeight="bold";
// }

/* forEach loop--> (when using className) */ 
// let navItems=Array.from(navItem); // first convert html collection into array
// navItems.forEach((navItems) => { // then apply forEach method.
//     navItems.style.backgroundColor="#fff";
//         navItems.style.color="green";
//         navItems.style.fontWeight="bold";
// });
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// const navItem=document.querySelectorAll("a");
// // console.log(navItem); // node list
// // we can use all three for loops.

// navItem.forEach((navItems) => {
//     navItems.style.backgroundColor="#fff";
//     navItems.style.color="green";
// });

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// innerHTML

const headline=document.querySelector(".headline")
// console.log(headline.innerHTML); // All elements under headline will get printed out. 
// headline.innerHTML="<h1> InnerHTML Changed </h1>";
// headline.innerHTML+="<button class=\"btn\">Learn More</button>" // Plus Symbol is added, So that previous same variable is also executed with current same variable.  
// console.log(headline.innerHTML);
















