const myArr = [0, 1, 2, 3, 4];
const myHeros = ["Hulk", "Captain America"];

const myArr1 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);
// console.log(Array.isArray(myArr)); // checks whether a variable is array or not. because if you do the typeof (myArr) it will give an object in return not the array.
// Array Methods

myArr.push(6); // adds the element from the end.
myArr.pop(); // removes the element from the end.
// console.log(myArr)

myArr.unshift(9); // add the element from the start.
myArr.shift(); // remove the element from  the start.

// console.log(myArr.includes(3)); // returns boolean value based on the existence of an element.

const newArr = myArr.join(); // converts the array into string rest all is same.

// how to clone an array.
let array1 = ["1", "2", "3"];
let array2 = ["1", "2", "3"];
// let array6 = array1.slice(0); // !! new way of cloning one array to another by just slicing it from the index value you want to clone it.
// console.log(array6);
// let array2 = [].concat(array1); !! another way to clone an array to new one.

// Spread Operator
// let array2 = [...array1]; !! most commonly used way to clone an array.

// console.log(array1 === array2); // false, because triple equal to operator checks only reference(Pointing to same memory location)equality not the content equality. both are pointing to different memory location.

// concatination of two array
let array3 = ["1", "2", "3"];
let array4 = ["4", "5", "6"];
let array5 = array3.concat(array4);
// console.log(array5); // ['1','2','3','4','5','6'];


//indexOf() --> It returns (-1) if the value is not present in the array. 

// console.log(array5.indexOf(0)) // -1
// console.log(array5.indexOf("2")) // 1
// console.log(array5.indexOf("4")) // 3
// console.log(array5.indexOf("8")) // -1

// includes() --> It tells whether the required element is present or not
// console.log(array5.includes("2")) // true
// console.log(array1.includes(2)) // false

// reverse() --> It reverse the original array.
// console.log(array4.reverse()); // ['6','5','4']

// sort() --> sort the array in alphabetical order.
// It modifies the original array
// always write first letter of an element either in uppercase or lowercase not mixed elements, else it will give unexpected result. 
// const animals=['cat','dog','bear','elephant','fox']
// console.log(animals.sort()) //  ['bear', 'cat', 'dog', 'elephant', 'fox']

// slice.
// It doesn't modify the original array.
// const myArr = [0, 1, 2, 3, 4];
const myn1 = myArr.slice(1, 3); // prints the index value 1 and 2 and excludes 3.
// console.log(myn1); // [1,2]

// Splice modifies the original array.
const animals=['cat','dog','bear','elephant','fox']
// const return_array=animals.splice(2,2);
// console.log(return_array) // ['bear','elephant']
  const return_array2=animals.splice(3,2,'lion','dear',100)
  // console.log(return_array2) // ['elephant','fox']
  // console.log(animals) //[ 'cat', 'dog', 'bear', 'lion', 'dear', 100 ] --> even though only two elements can be replaced but still 100 is also added to array.                                                                   
// ================================================================================================================

// Multidimensional Array
// They are also called as arrays inside array
const multiDArray=[['Shikhar',1],['Harshit',2],['Yash',3]]
console.log(multiDArray) // [ [ 'Shikhar', 1 ], [ 'Harshit', 2 ], [ 'Yash', 3 ] ]
console.log(multiDArray[0]) // [ 'Shikhar', 1 ]
console.log(multiDArray[1]) // [ 'Harshit', 2 ]
console.log(multiDArray[2]) // [ 'Yash', 3 ]
console.log(multiDArray[0][1]) // 1
console.log(multiDArray[1][1]) // 2
console.log(multiDArray[2][1]) // 3 
console.log(multiDArray[0][2]) // Undefined
console.log(multiDArray[1][2]) // Undefined
console.log(multiDArray[2][2]) // Undefined
console.log(multiDArray[0][0]) 



