// Array Methods

// ForEach
// Map
// Filter
// reduce
//-------------------------------------------------------------------------------------------------------------------
//1. ForEach- it does'nt return anything.
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
// const square = function (number) {
//   return number + number;
// };

/* Using arrow function*/

const squareNumber = numbers.map((number, index) => {
  // console.log(number * 2, index);
}); // map method always return something in a new array.
// console.log(squareNumber);

//---------------------------------------------------------------------------------------------------------------

// filter Method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = myNums.filter((num) => num > 4); // if you are not using curly braces then no need to write return num>4.
console.log(NewNums);
