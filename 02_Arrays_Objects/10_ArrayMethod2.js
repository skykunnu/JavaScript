// Sort Method
/* this method sorts strings only, means if anything is not a string, it will first convert it into string and then sort it according to their ASCII values and in comparision it will take the first number from the left-hand side. And for character string it will sort in alphabetical order.*/

const number = [5, 9, 1200, 410, 3000];
// sort-> [5,9,410,1200,3000] (Expected).
number.sort();
// console.log(number); // [ 1200, 3000, 410, 5, 9 ] first converted to string and then sort according to ASCII values.

const userName = ["shikhar", "harshit", "yash", "prakhar"];
userName.sort();
// console.log(userName); // [ 'harshit', 'prakhar', 'shikhar', 'yash' ] Sort according to alphabetical order.

//------------------------------------------------------------------------------------------------------------------------

// Find method
const myArray = ["hello", "cat", "dog", "lion"];

/* Using simple callbackfunction */

function isLength(string) {
  return string.length === 3;
}

/* Using Arrow function. */
const ans = myArray.find((string) => string.length === 3);
console.log(ans); // it will only print the first occurence word which is of length 3.

//-------------------------------------------------------------------------------------------------------------------------

// Every method
const Numbers = [2, 4, 6, 8, 10];
const Ans = Numbers.every((number) => number % 2 === 0);
console.log(Ans); // true as all elements are even.
// callback function ---> boolean
// every method ---> boolean (it will return true if all numbers of the array is even, if any one of them turns out be odd it will print false.) * Subject to condition.

//------------------------------------------------------------

// Some Method

const numbers = [3, 5, 11, 9]; // or [3,5,8,9]

// If any one of the elements of an array is even it will return true or else false.

const ans1 = numbers.some((numbers) => numbers % 2 === 0);
console.log(ans1);
