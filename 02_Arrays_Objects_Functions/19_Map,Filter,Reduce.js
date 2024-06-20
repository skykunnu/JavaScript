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

const filteredMonth=months.filter(function(month,index,array){
console.log(index,month);

return month.startsWith('J'); // condition.
});

console.log(filteredMonth) // It will have all those months whose name starts with J. 
console.log(months) // ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']