// Some & Every Method-> It is also one of the looping method used in iterating the elements of an array. 

/*
"Some methods break from the loop as soon as they find a condition to be true, and for false condition it will continue traversing the array untill it finds the true condition
and if it does'nt find any true condition then it will return false.

Every methods break from the loop as soon as they find a condition to be false, and for true condition it will continue traversing the array untill it finds the false condition
and if it does'nt find any false condition then it will return true.

*/ 

// Some example

const evenNumbers=[0,2,4,6,8]


const result=evenNumbers.some((num)=>{
    return num%2===0;
})

// console.log(result) // true, because for element 0 it will return true and break from the loop without traversing remaining elements. 

const oddNumbers=[1,3,5,7,9]

const result2=oddNumbers.every((num)=>{
    return num%3===0;
})

console.log(result2) // false, because for element 1 it will return false and break from the loop wihtout travering remaining elements.