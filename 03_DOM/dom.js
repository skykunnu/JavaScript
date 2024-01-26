/* Parent-Child relationship */

const rootNode=document.getRootNode();
const htmlElementNode=rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]--> this text is representing the newline-space after the end of head tag.
const headElementNode=htmlElementNode.childNodes[0];
const TextElementNode=htmlElementNode.childNodes[1];
const bodyElementNode=htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);


/* sibling relation */

// console.log(headElementNode.nextSibling); // text
// console.log(TextElementNode.nextSibling); // body
// console.log(headElementNode.nextElementSibling); // body, because text is not a element. 


const h1=document.querySelector("h1");
const body=h1.parentNode.parentNode;
// body.style.color="green";
// body.style.backgroundColor="red";

const head=document.querySelector("head");
const title=head.querySelector("title"); // html elements can also be used with queryselector. 
// console.log(title);

const container=document.querySelector(".container");
console.log(container.childNodes); // text,h1,text,p,text --> It will print all the things associated with it. 
console.log(container.children); //  h1,p --> With children it will only print html element. 

