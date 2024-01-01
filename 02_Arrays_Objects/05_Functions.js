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
  console.log("Happy Birthday to you !!");
};

singHappyBirthday();
