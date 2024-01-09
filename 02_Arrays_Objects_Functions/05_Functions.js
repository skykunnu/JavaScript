/* Function Declaration */

function singHappyBirthday() {
  console.log("Happy Birthday to you");
}
// singHappyBirthday();

function sumTwoNumbers(a, b) {
  return a + b;
}
const returnValue = sumTwoNumbers(4, 9);
// console.log(returnValue);

/* Function to check whether a Num is Even or odd. */
function isEven(Number) {
  return Number % 2 === 0;
}
// console.log(isEven(13));

function String(anyString) {
  return anyString.slice(0, 1);
}
// console.log(String("Shikhar"));
//------------------------------------------------------------------------------------------------------------

/* Function Expression */

const singHappyBirthday = function () {
  // here function does'nt hold any name, the variable name is the function name.
  console.log("Happy Birthday to you !!");
};

singHappyBirthday();
//-------------------------------------------------------------------------------------------------------------
/* Arrow Function */

const singHappyBirthday = () => {
  console.log("Happy Birthday to you !!");
};
// singHappyBirthday();

const Sum = (a, b) => a + b; // function compressed into single line, first Sum function gets called after that values are assigned to parameters and then sum of a & b are return.
console.log(Sum(2, 3));

//************************************************************************************************************************
