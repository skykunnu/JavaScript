const myArr=[0,1,2,3,4]
const myHeros=["Hulk","Captain America"]

const myArr1=new Array(1,2,3,4)
console.log(myArr[0]);
// Array Methods

myArr.push(6) // add the element from the end. 
myArr.pop() // remove the element from the end. 

myArr.unshift(9); // add the element from the start.
myArr.shift() // remove the element from  the start. 

console.log(myArr.includes(3)); // returns boolean value based on the existence of an element.

const newArr=myArr.join() // converts the array into string rest is all same. 


// slice and splice. 

console.log("A ", myArr);

const myn1=myArr.slice(1,3) // prints the index value 1 and 2 not 3. It does'nt modify the original array.  
console.log(myn1);

const originalArray = [1, 2, 3, 4, 5];
originalArray.splice(1, 2); // Removes 2 elements starting at index 1: [1, 4, 5]
originalArray.splice(2, 0, 6, 7); // Inserts 6 and 7 at index 2: [1, 4, 6, 7, 5]
// Splice modifies the original array. 















