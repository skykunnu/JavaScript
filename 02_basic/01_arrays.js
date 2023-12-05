const myArr = [0, 1, 2, 3, 4];
const myHeros = ["Hulk", "Captain America"];

const myArr1 = new Array(1, 2, 3, 4);
console.log(myArr[0]);
console.log(Array.isArray(myArr)); // checks whether a variable is array or not. because if you do the type of myArr it will give an object in return not the array.
// Array Methods

myArr.push(6); // add the element from the end.
myArr.pop(); // remove the element from the end.

myArr.unshift(9); // add the element from the start.
myArr.shift(); // remove the element from  the start.

console.log(myArr.includes(3)); // returns boolean value based on the existence of an element.

const newArr = myArr.join(); // converts the array into string rest all is same.

let array1 = ["1", "2", "3"];
// let array2 = ["1", "2", "3"];
// let array2 = array1.slice(0); !! new way of cloning one array to another by just slicing it from the index value you want to clone it.
// let array2 = [].concat(array1); !! another way to clone an array to new one.

// Spread Operator
// let array2 = [...array1]; !! most commonly used way to clone an array.

// console.log(array1 === array2); // false, because triple equal to operator checks only reference(Pointing to same memory location)equality not the content equality. both are pointing to different memory location.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice and splice.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // prints the index value 1 and 2 not 3. It does'nt modify the original array.
console.log(myn1);

const originalArray = [1, 2, 3, 4, 5];
originalArray.splice(1, 2); // Removes 2 elements starting at index 1: [1, 4, 5]
originalArray.splice(2, 0, 6, 7); // Inserts 6 and 7 at index 2: [1, 4, 6, 7, 5]
// Splice modifies the original array.
