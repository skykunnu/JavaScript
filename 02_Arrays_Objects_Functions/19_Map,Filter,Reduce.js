// They all are also called non-destructive method because they do not destroy anything but returns a new array instead. 

// Map-> It is an array method that is used to iterate over elements in an array and execute a provided function once for each array elements. 

const months=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

// const Month=months.map(function(month,index,array){
// console.log(index,month)
// console.log(array) // This third argument will simply return the whole array on which the map method is applied. (rarely used)
// return month.toLocaleUpperCase(); //  this whole return value gets stored inside the Month variable. 
// });

// console.log(Month) // ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'] // New array
// console.log(months) // ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] // original array


//-------------------------------------------------------------------------------------------------------------------------------------------------

// Filter-> As the name suggests it will filter out something means that there must be some condition involved in it. 

// const filteredMonth=months.filter(function(month,index){
// console.log(index,month);

// return month.startsWith('J'); // condition.
// });

// console.log(filteredMonth) // It will have all those months whose name starts with J. 
// console.log(months) // ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


//--------------------------------------------------------------------------------------------------------------------------------------------------

// Reduce-> It is the most powerful array method used to reduce an array to a single value by executing reducer function on each element of the array. 

// The reduce function takes four arguments:
/* 
1. accumulator - the accumulated result from the previous iteration. 
2. current value - the current element being processed in an array.
3. current Index (optional)
4. array (optional)
5. Initial value - the value to be use as first argument to the first call of the callback. 
*/



// case-1-> when there is a return value and initial value. 

const nums=[1,2,3,4,5];

nums.reduce((accumulator,currentValue)=>{
console.log(currentValue);
return accumulator
},0); // Initial value=0

// since there is an initial value present in reducer, so the value of argument will be 0 and iteration will start from 1st element of the array. 

/* 
1st iteration-> 
accumulator=0
currentValue=1
since, the function returns the value, so the value of accumulator for the next iteration remains unchanged (0). 


2nd iteration->
accumulator=0
currentValue=2
since, the function returns the value, so the value of accumulator for the next iteration remains unchanged (0).

3rd iteration->
accumulator=0
currentValue=3
since, the function returns the value, so the value of accumulator for the next iteration remains unchanged (0).

4th iteration->
accumulator=0
currentValue=4
since, the function returns the value, so the value of accumulator for the next iteration remains unchanged (0).

5th iteration-> 
accumulator=0
currentValue=5
since, the function returns the value, so the value of accumulator for the next iteration remains unchanged (0).
*/

//-------------------------------------------------------------------------------------------------------------------------------

// case-2 -> when there is no initial value and no return value. 
// const sum=nums.reduce((accumulator,currentValue,index)=>{
//     console.log(accumulator) 
//     console.log(currentValue)
// }); // Initial value is none. 

/*
since there is no initial value, therefore the value of accumulator will be the first element of an array and the value of currentValue will be second element
of the array.

1st Iteration->
accumulator=1
current value=2

since there is no return value in function, so the accumulator will be undefined for next iteration. 

2nd Iteration->
accumulator='undefined'
current value=3

since there is no return value in function, so the accumulator will be undefined for next iteration.

3rd Iteration->
accumulator='undefined'
current value=4

since there is no return value in function, so the accumulator will be undefined for next iteration.

4th Iteration->
accumulator='undefined'
current value=5

since there is no return value in function, so the accumulator will be undefined for next iteration.

Output->
1
2
undefined
3
undefined
4
undefined
5


*/