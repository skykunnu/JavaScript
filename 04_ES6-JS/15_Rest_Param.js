// Rest Paramter- 

// Rest Parameter- It is also a feature in JS that allows a function to accept an indefinite number of arguments as an array. 

// A function can only have one rest parameter and , the rest parameter must be the last parameter in the function defination. 

function myFunc(a,b,...manyArg){
    console.log(a) // 1
    console.log(b) // 2
    console.log(manyArg) // [3,4,5,6,7,8,9] 
}


console.log(myFunc(1,2,3,4,5,6,7,8,9)); // 1 and 2 assigned to arguments a and b and remaining elements are combinedly assigned in form of an array to rest param (manyArg).