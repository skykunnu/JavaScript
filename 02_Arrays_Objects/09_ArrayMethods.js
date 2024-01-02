// Array Methods

// ForEach
// Map
// Filter
// reduce
//-------------------------------------------------------------------------------------------------------------------
//1. forEach- It does'nt return anything.
const coding = ["JS", "Java", "Cpp", "Go", "Rust", "Python"];

//Syntax for forEach Method using simple function.
coding.forEach(function (Languages, index, Array) {
  // console.log(Languages, index, Array);
});

// using arrow function
coding.forEach((Languages, index, Array) => {
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
  // console.log(item.LanguageName); --> Printing the LanguageName of the objects defined inside the array.
});
//----------------------------------------------------------------------------------------------------------------------------------
// Map method
const numbers = [1, 2, 3, 4];

/* Using Simple function*/
const square = function (number) {
  return number + number;
};

/* Using arrow function*/

const squareNumber = numbers.map((number, index) => {
  // console.log(number * 2, index);
}); // map method always return something in a new array.
// console.log(squareNumber);

//---------------------------------------------------------------------------------------------------------------

// filter Method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = myNums.filter((num) => num % 2 == 0); // if you are not using curly braces, then don't need to write return num%2==0.
// console.log(NewNums);

//----------------------------------------------------------------------

//Reduce method

const Numbers = [1, 2, 3, 4, 5, 10];
// aim: to sum of all numbers in an array.
const sum = Numbers.reduce((accumulator, currentValue) => {
  /* reduce is doing sum of the elements of the array. */
  return accumulator + currentValue;
}); // As soon as the curly braces is ending you can initialize the current value of accumulator.
console.log(sum);
// Track accumulator , currentValue  , return
//          1              2             3
//          3              3             6
//          6              4             10
//          10             5             15
//          15             10            25

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "Laptop", price: 22000 },
  { productId: 3, productName: "Headphones", price: 5000 },
];

userCart.reduce(totalPrice, currentProduct){

};