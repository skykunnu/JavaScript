const name = "Shikhar";
const repocount = 10;

// console.log(name + repocount);

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // use of Template literals.

const gameName = new String("Shikhar-Jagdish-Khandelwal"); //
// console.log(gameName.length);
// console.log(typeof gameName);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4); // it will the print the value from 0 to n-1.
// console.log(newString); // Shik

const anotherString = gameName.slice(2, 4); // it will print the value from (a,b-1).
// console.log(anotherString); // ik
// const newStringOne="   Shikhar   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // trim function removes the spaces from both the end of string.

const url = "https://flipkart.in";
// console.log(url.replace('in','com')) // it is like replace this from this.
// console.log(url.includes('Shikhar')) // To Check whether the string  or something is present in variable or not.
// console.log(gameName.split('-')); // change the dash with array.
const string1 = "12";
const string2 = "10";
console.log(+string1 + +string2); // 22. because unary(+) operator in front of both the strings converts the string into number.
