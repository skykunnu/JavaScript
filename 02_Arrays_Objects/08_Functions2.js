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

// Lexical Scope- means the Environment where the function is defined.
const myVar = "value1";
function myApp() {
  function myFunc() {
    // const myVar = "value59";
    console.log("inside myFunc", myVar);
  }

  console.log(myVar);
  myFunc();
}
myApp();
