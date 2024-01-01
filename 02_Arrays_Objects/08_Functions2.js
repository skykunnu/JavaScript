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
//-------------------------------------------------------------

// Lexical Scope- means the lexical Environment where the function is defined.
const myVar = "value1";
function myApp() {
  // myApp Lexical environment is outside environment where it is defined.
  function myFunc() {
    // myFunc lexical environment is myApp().
    // const myVar = "value59";
    console.log("inside myFunc", myVar); // myVar=1 bcoz of lexical scope method or it will check the nearest value of myVar.
  }

  console.log(myVar);
  myFunc();
}
myApp();
