// Sets(It is iterable)
// Store data, has its own methods, No index based access,Unique items/element only, order is not guaranteed.

// Syntax
const Numbers = new Set([1, 2, 3]);
// console.log(Numbers);
const numbers = new Set();
numbers.add(1); // add function--> to add something in a empty set.
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(["item1", "items2"]); // this is different than below as both of them have different memory locations.
numbers.add(["item1", "items2"]);
// console.log(numbers);

//------------------------------------------------------------------------------------------------------------------------------------
// Map Method
/* Map is iterable
-> store data in ordered function

-> store key value pair (like object)
-> duplicate keys are not allowed

# Difference between map and objects
1. Objects can only have string or symbol as key.

2. In Map you can use anything as key (like array,number,string).

//Object Literals
const person = {
  firstName: "Shikhar",
  age: 23,
  1: "one", // this (1) here is a string not an integer.
};
*/

//Syntax
const person = new Map();
person.set("firstName", "Shikhar");
person.set("age", "23");
person.set(1, "one");
person.set([1, 2, 3], "onetwothree");
// if you have to access any key in Map use get keyword.
console.log(person.get("firstName"));

console.log(person.keys()); // All keys will be listed out.

for (let key of person) {
  // whole key value pair will be printed out.
  console.log(key);
}

for (let key of person.keys()) {
  // only keys will be printed out.
  console.log(key);
}
