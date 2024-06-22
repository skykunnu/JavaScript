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

// Spread Operator-> It is powerful feature introduced by JS in ES6 version. It is generally used by arrays & object only for manipulation purpose. 

// the spread operator primarily allow us to efficiently merge,copy or pass array elements to functions as an arguments and same for objects.

 
// Uses of spread operator with arrays

//1) Combining arrays:- 

const arr1=[1,2,3];
const arr2=[4,5,6];

const combined=[...arr1,...arr2];

// console.log("Combined Array:",combined); // [1,2,3,4,5,6]

//2) Passing arguments to the function

// the spread operator simplifies the process of passing variable-length arguments to the function. 

function sum(a,b,c){
    return a+b+c;
}
const nums=[1,2,3]
const result=sum(...nums);

// console.log(result); // 6


//3) Cloning(copy) arrays

// the spread operator creates a shallow copy of an array.

const originalArr=[1,2,[3,4,5]]
const copiedArr=[...originalArr]

// modifying array 
copiedArr[0]=10 
copiedArr[2][0]=30
copiedArr[2][1]=40
copiedArr[2][2]=50


/* 0th element of original array remain same but the 2nd element gets changed 
because the value present at 0th element is of primitive data type and value(sub-array) present at 2nd element is of non-primitive data type & reference.
so both original and copied refer to same sub-array).
 */ 

// console.log(originalArr) // [ 1, 2, [ 30, 40, 50 ] ]
// console.log(copiedArr) //   [ 10, 2, [ 30, 40, 50 ] ]


// Uses of spread operator with objects.

// 1) Merging properties of object into new objects. 
const obj1={
    a:1,
    b:2
};
const obj2={
    b:3,
    c:4
};

const merged={...obj1,...obj2};

// console.log(merged) // {a:1,b:3,c:4}, 
// why not b:2, it is because the order in which objects are spread affects the result means
// properties of object spread later will overwrite properties of object spread earlier if they have same key.


// 2) Cloning objects 

// cloning objects using spread operator creates a shallow copy of an object. 
const original={a:1,b:2,c:{d:4}}
const cloned={...original}

cloned.a=3;
cloned.b=4;
cloned.c.d=6;

console.log(original)
console.log(cloned)

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































