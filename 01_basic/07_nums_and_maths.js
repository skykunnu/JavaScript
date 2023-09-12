const score=400
console.log(score)
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber=128.4966
//The funda behind the precision is that start the count from extreme left. like for Ex the precision is 3 , so will start count from left and stop after the count of 3 and will check the value after count is greater than or equal to 5 or less than 5. if more will add +1 to previous value and if less will return as it.  
console.log(otherNumber.toPrecision(6));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); // conversion to Indian Standard. 