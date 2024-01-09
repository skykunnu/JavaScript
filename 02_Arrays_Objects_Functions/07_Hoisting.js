// Hoisting- When function call is done before initializing the function.
/* Only possible in case of Function Declaration, Not possible in case of function Expression & Arrow functions */
hello();
function hello() {
  console.log("Hello World");
}
