// Block--> It is nothing buts a combining multiple javascript statements into one. 
// We group multiple statement together in a block so that we can use it where js expects one statement. 

// Block Scope--> What all variables and function we can access inside this block.
// let and const are block scoped (means they are stored in a separate memory space) while var is not but's a global scope.

// As soon as the js will come to line 15 the scope of b & c will be finished. 
// {
// var a=10;
// let b=20;
// const c=30;
// console.log(a); // 10 
// console.log(b); //20
// console.log(c); //30
// }
// console.log(a); // 10
// console.log(b); // Not defined
// console.log(c); // Not defined

//-------------------------------------------------------------------------------------------------------------------------------------
//Shadowing--> Refers to the situation where a variable declared within a local scope has the same name as a variable in an outer scope 
//When this occurs the inner variable 'Shadows' over the outer variable.(this is the case for var only).



var a=100;
let b=100;
const c=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); //30
}
console.log(a); // 10 Shadow by the inner a.
console.log(b); // 100 Not shadowed. (this b is not present in the global scope, rather in the script scope).
console.log(c); //100 Not shadowed.




const d=100;
function x(){
    const d=40;
    console.log(d); //40
  }
  x();
console.log(d); //100 Not shadowed.(Same Concept as that of let & const).
