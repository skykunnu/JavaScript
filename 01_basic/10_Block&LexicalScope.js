// Block--> It is nothing buts a combining multiple javascript statements into one. 
// We group multiple statement together in a block so that we can use it where js expects one statement. 

// Block Scope--> What all variables and function we can access inside this block.
// let and const are block scoped (means they are stored in a separate memory space) while var is not but's a global scope.

// As soon as the js crosses line 15 the scope of b & c will be finished. 
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
/*
Scope--> Where you can access a specific variable or a function in the code. scope directly depends on lexical environment.

Lexical Environment--> Whenever a execution context is formed, a lexical environemnt is also created , lexical enviro is nothing buts a local memory alongwith the lexical environ of its parent.

ex- c() function is lexically(physically present) inside a() function. a() is lexically inside global scope. 

Working->
when the js engine encouters a console.log(b). first, it will try to find b inside the local memory, if it's not present over there,
then it will go to its reference and goes to the lexical environment of its parents and now it will try to find in the a() and over there it finds out b
and it will go back and print b inside a console.

Now Suppose, if b was not there inside a also, then it would have gone to the lexical enviro of a's parent and it would have tried to find in the
global lexical environment and again there was no b there, suppose we never declared b anywhere in our code. Now it goes to the lexical environemnt of the global's parent 
and it finds Null and hence the searching stops as we found out null.

*/


function a(){
  var b=10;
  c();
  function c(){
      console.log(b);
  }
  }
  a();
  
  





















































  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  
//Shadowing--> Refers to the situation where a variable declared within a local scope has the same name as a variable in an outer scope 
//When this occurs the inner variable 'Shadows' over the outer variable.(this is the case for var only).



var a=100;
let b=100;
const c=100;
{
    var a=10;
    let b=20;
    const c=30;
    // console.log(a); // 10
    // console.log(b); // 20
    // console.log(c); //30
}
// console.log(a); // 10 Shadow by the inner a.
// console.log(b); // 100 Not shadowed. (this b is not present in the global scope, rather in the script scope).
// console.log(c); //100 Not shadowed.




const d=100;
function x(){
    const d=40;
    //console.log(d); //40
  }
  x();
// console.log(d); //100 Not shadowed.(Same Concept as that of let & const).
