//Closure--> A function bundled together with lexical scope is called Closure.
//Use cases-->
/* 1. Module Design pattern
2. Currying
3. functon like once
4. memoize
5. maintaining state in async world
6. setTimeouts
7. Iterators
*/


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x(); // it will return function y.
// z(); // As we invoke z as a function , we already know a function y is returned to it by x and hence, It will print 7 and here comes the closures into picture, so when the function is returned from another function they still maintains their lexical scope, they remember where they were actually present.
// though  x no longer exist but still the y function remembers its lexical scope. 
// if we change the value of a to 100. the output of z function will be 100. because the function y is referenced to variable a not the value of a. 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Corner Cases

// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b); // 7 900
//         }
//         y();
//     }
//     x();
// }
// z();

