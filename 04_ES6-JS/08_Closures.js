//Closure--> It is a combination of a function bundled together(enclosed) with references to its surrounding state (the lexical environment)

// In other words, a closure gives you access to an outer function's scope from an inner function.


//Use cases-->
/* 1. Module Design pattern
2. Currying
3. functon like adder
4. memoization
5. maintaining state in async world
6. setTimeouts
7. Iterators
*/

// Ex--> Adder function
function adder(num){ // Outer function (surrounding state)
    
    
    function add(b){ // Inner function (enclosed)---> Closure (It is a closure that has num value present in it. which clearly means that add function has access to outer function's scope).
        console.log(num+b);
    }
    return add;
}
const addTo=adder(10); // This 10 is passed as an argument to adder function, 
// then add function is executed and after that adder fn returns add fn back from where it has been called, and then addTo fn is invoked 
// with an argument that replaces b with it's value and finally console the value (num+b) with whatever arguments passed to each one of them. 
addTo(2); // 12 ans. 






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

//------------------------------------------------------------------------------------------------------------------------------------------
