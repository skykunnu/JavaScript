// Use Const for creating an array.

// because of Reference data type we were able to add elements to an array despite being assigned by const.
// Note-!! whenever using Non-Primitive DataType use Const.

const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc = ["Superman", "flash", "batman"];
marvel_heroes.push(dc);
//  console.log(marvel_heroes); // ["thor", "Ironman", "Spiderman","Superman", "flash", "batman"];
//  console.log(marvel_heroes[3][1]);

// concat function add two arrays and return them into a new array.

// const allHeroes=marvel_heroes.concat(dc)
// console.log(allHeroes); -> ["thor", "Ironman", "Spiderman","Superman", "flash", "batman"];

// spread operator(...)- another way to add two different arrays into one.
const all_new_heroes = [...marvel_heroes, ...dc];
// console.log(all_new_heroes); ["thor", "Ironman", "Spiderman","Superman", "flash", "batman"];

// flat(depth-> means how deep a nested array structure should be flattened. By Default the depth value is 1.) function combines all the subarray into one single new array. also it can be used to remove the empty spaces in the array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(2);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Three ways to form an array are-
/*
1. Array.isArray()
2. Array.from()
3. Array.of()
*/

// console.log(Array.isArray("Shikhar"));
// console.log(Array.from(["Shikhar", "Khandelwal"])); // convert anything like Strings,object into an array.
// console.log(Array.from({ name: "Shikhar" })); // it will return an empty array.As it is not able to convert it.

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // returns a new array with set of elements passed as an argument in the function.

// ==================================================================================================================================

// Array Destructuring
const myArray = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...myArray2] = myArray; // way of storing elements of an array to another variables. myvar1= 0th index element, myvar2=1st index element and so on and they will behave like a normal variable.
myvar1 = "Shikhar";
myvar2 = "Khandelwal";
console.log(myvar1); // ("value1") or Shikhar;
console.log(myvar2); // ("value2") or Khandelwal;
console.log(myArray2); // spread operator is used to create a new array. so therefore remaining elements of myArray copied into new array myArray2. ['value3','value4'].
