
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