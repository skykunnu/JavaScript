// Functions inside function

function app() {
  const myFunc = () => {
    console.log("hello from myFunc");
  };
  const sum = (num1, num2) => num1 + num2;
  const mul = (num1, num2) => num1 * num2;
  console.log("Inside app");
  myFunc();
  console.log(sum(2, 3));
  console.log(mul(3, 3));
}
// app();
//-----------------------------------------------------------------------------------------------------------------------------------

// Lexical Scope- means the lexical Environment where the function is defined.
const myVar = "value1";
function myApp() {
  // myApp Lexical environment is outside environment where it is defined.
  function myFunc() {
    // myFunc lexical environment is myApp().
    const myVar = "value59";
    console.log("inside myFunc", myVar); // myVar=value1 bcoz of lexical scope method or it will check the nearest value of myVar. and if myVar=value59 is defined then output would be value59 not value1 again due to lexical concept. 
  }

  console.log(myVar);// value1 due to lexical concept.
  myFunc();
}
myApp();
//----------------------------------------------------------------------------------------------------------------------------
/* block scope vs function scope */

// let and const are block scope while var is function scope.

// Although, they have same variable name but their scoping is different. So that's why there is no error.
{
  let firstName = "Harshit";
  // console.log(firstName);
}
{
  let firstName = "Shikhar";
  // console.log(firstName);
}

// Also, Using var you can print from outside the function , as var consider whole file as function scope.
{
  var firstName = "Dikshant";
}
// console.log(firstName);

//----------------------------------------------------------------------------------------------------------------------------

// rest Parameters 

function myFunc(a, b, ...c) {
  // using 3 dots remaining variable other than a & b are stored in c as an array.
  console.log(`a is ${a}`); // a is 3
  console.log(`b is ${b}`); // b is 4
  console.log(`c is `, c); // c is  [ 5, 6, 7, 8 ]
}
// myFunc(3, 4, 5, 6, 7, 8);

function addAll(...numbers) {
  /* rest parameter is used. */
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}
const ans = addAll(2, 3, 4, 5, 6, 7, 8);
// console.log(ans);

//-------------------------------------------------------------------------------------------------------------------------
/* Parameter Destructuring */
// Mostly used with object and heavily in react.

const person = {
  firstName: "harshit",
  gender: "male",
};

function printDetails(obj) {
  /* It is nothing but's a  function calling object*/
  console.log(obj.firstName);
  console.log(obj.gender);
}

// Destructuring part
function printDetails({ firstName, gender }) {
  /* here we have destructured parameters with different name.*/
  console.log(firstName);
  console.log(gender);
}
// printDetails(person);
//-------------------------------------------------------------------
// Callback function --> function mein as a input accept karke call karney ko hi callback function bolte hain.
function myFunc(callback) {
  /* now callback(notation to write, whenever callback func has to be used) is assigned with function,means function as a input accept kiya. */
  console.log(callback); // this will print the whole function.
  callback(); // here function is called, this process is known as callback function.
}
function myFunc2(name) {
  console.log("inside my func2");
  console.log(`your name is ${name}`); // As we have not passed the name, so therefore the output will be undefined or if we had passed the name, the name would be printed out. .
}
// myFunc(myFunc2); // passed function as an input argument.
//--------------------------------------------------------------------

// function returning function.

/* function intitialize */
function myFuncs() {
  function hello() {
    /* Another function is called inside a function. */
    console.log("hello world");
  }
  return hello; // function is return function.
}
const Ans = myFuncs(); // this means Ans also become a function.
// console.log(Ans); // this will print whole function
// Ans(); // this will print all the statements inside a function.
