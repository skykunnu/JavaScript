// Array Methods

// ForEach
// Map
// Filter
// reduce
//-------------------------------------------------------------------------------------------------------------------
//1. forEach- It is used to iterate over elements in an array and execute a provided function once for each array element & does'nt return anything.
const coding = ["JS", "Java", "Cpp", "Go", "Rust", "Python"];

//Syntax for forEach Method using simple function.
coding.forEach(function (currentValue, index, Array) {
  /* 1. currentValue--> the current element being processed in the array.
    2. index--> the index of the current element being processed.
    3. Array--> the array on which forEach was called.
    */
  // console.log(currentValue, index, Array); // JS 0 [ 'JS', 'Java', 'Cpp', 'Go', 'Rust', 'Python' ]
});

// using arrow function
coding.forEach((currentValue, index, Array) => {
  /* In ForEach method we can pass index as well as whole array also. */
  // console.log(Languages, index, Array);
});

const Coding = [
  {
    LanguageName: "JavaScript",
    LanguageFileName: "js",
  },
  {
    LanguageName: "CPP",
    LanguageFileName: "cpp",
  },
  {
    LanguageName: "GoLang",
    LanguageFileName: "Go",
  },
];

Coding.forEach((item) => {
  //console.log(item.LanguageName); //--> Prints all the LanguageName of the objects defined inside the array.
});
//----------------------------------------------------------------------------------------------------------------------------------
// Map method--> It is used to create a new array by applying a provided function to each element of an existing array.
const numbers = [1, 2, 3, 4];

/* Using arrow function*/

const squareNumber = numbers.map((number, index) => {
  // console.log(number * 2, index);
}); // map method always return something in a new array.
// console.log(squareNumber);

//---------------------------------------------------------------------------------------------------------------

// filter Method--> it is used to create a new array containing element that satisfy a specified condition.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = myNums.filter((num) => num % 2 == 0); // if you are not using curly braces, then there is no need to write return num%2==0.
// console.log(NewNums);

//----------------------------------------------------------------------

//Reduce method--> It is used to reduce an array into a single value. 
/* It can also be used to do sum or product of the array. */ 
const Numbers = [1, 2, 3, 4, 5, 10];
// aim: to sum of all numbers in an array.
const sum = Numbers.reduce((accumulator, currentValue) => {
  /* reduce is doing sum of the elements of the array. */
  return accumulator + currentValue;
}, 1); // As soon as the curly braces ended you can initialize any current value of accumulator.
// console.log(sum);

/* Below is the way to understand the Reduce method,
 current value is nothing buts a elements of an array.*/
// Track accumulator , currentValue  , return
//          1              2             3
//          3              3             6
//          6              4             10
//          10             5             15
//          15             10            25

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "Laptop", price: 22000 },
  { productId: 3, productName: "Headphones", price: 16000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

// console.log(totalAmount);

// totalPrice         currentProduct          return
//   0                   12000                12000
//  12000                22000                34000
//  34000                16000                50000

//************************************************************************************************************************ */
