// Default parameter- It allows you to initialize named parameters with default values if no values or undefined is passed.
// This feature was introduced in ES6. 



function multiply(a,b=1){
    return a*b
}
// console.log(multiply(5,2)); // 10, because 2 is swap by 1. 
// console.log(multiply(2)) // 2, because a gets the value as 2 and took default value of b. 
// console.log(multiply(2,null)) // 0,because null is coerced to 0 (type coercion).
// console.log(multiply(2,undefined))// 2, because undefined is swap by b's default value. 


//------------------------------------------------------------------------------------------------------------------------------------

// Spread Operator-> 