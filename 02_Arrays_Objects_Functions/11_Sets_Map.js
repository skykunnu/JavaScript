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
const person = new Map(); // creating empty map aand then setting the key values inside it.
person.set("firstName", "Shikhar");
person.set("age", "23");
person.set(1, "one");
person.set([1, 2, 3], "onetwothree");
person.set({ 1: "one" }, "onetwo"); // {}-> key and " "-> value
// if you have to access any key in Map use get keyword.
// console.log(person.get("firstName"));

// console.log(person.keys()); // All keys will be listed out.

// You can also directly input (key-value) pair inside the map function.
const Person = new Map([
  ["firstName", "Shikhar"], // why we are storing it in array form, it is because they are stored in this fashion only.
  ["age", "23"],
]);

for (let [key, value] of person) {
  /* you cannot write key,value together without destructuring it.*/
  // console.log(key, value);
}

for (let key of person) {
  // whole key value pair will be printed out in the form of array.
  // console.log(key);
}

for (let key of person.keys()) {
  //   // only keys will be printed out.
  //   console.log(key);
}

// Ques- Add more key-value pairs to object using Map.
const Male = {
  firstName: "Shikhar",
  gender: "Male",
};

const People = new Map();
People.set(Male, { age: 27, id: 1 }); // here Male object is associating with some additional info (age & id).
console.log(People.get(Male).id); // Here, you use the get method of the People Map to retrieve the value associated with the key Male, which is the object { age: 27, id: 1 }. Then, you access the id property of this object and log it to the console. So, it will output 1.


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Weak map
