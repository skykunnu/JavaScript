const score=400
// console.log(score)
const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber=128.4966
//The funda behind the precision is that start the count from extreme left. like for Ex the precision is 3 , so will start count from left and stop after the count of 3 and will check the value after count is greater than or equal to 5 or less than 5. if more will add +1 to previous value and if less will return as it.  
// console.log(otherNumber.toPrecision(6));

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN')); // conversion to Indian Standard.

//+++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.44444)); // after a point, if the value is greater than 5 , then add +1 to previous element or if less than 5 , then return the value as it is, as before the point. 
// console.log(Math.ceil(4.49)); // ceil means top value.
// console.log(Math.floor(4.9)); // floor means bottom value. 
// console.log(Math.min(2,3,4,5,9)); // return the min value.
// console.log(Math.max(8,9,3,2)); // return the max value. 

// console.log(Math.random()); // returns the value between 0 and 1.
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min=1;
const max=100;
const formula= min+(max-min)*Math.random() // Formula to find the Random numbers between any two given number. If random function value is 0 then answer will be min value and if random function is 1 then answer will be max value.     
// console.log(Math.floor(formula));
