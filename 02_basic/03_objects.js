/*
Objects- (Reference type or Non-Primitive)
-> Objects store key value pair.
-> Objects don't have index
*/
// -------------------------------------------------------------------------------------------------------------------
// singleton

//   1. whenever we declare object with literals then no singleton is formed.
//   2. when declare with constructor then singleton is formed.
//  object.create- declaration of object using constructor method.

const person = {
  name: "Shikhar",
  age: 22,
  hobbies: ["Playing Cricket", "Listening to music", "Reading about GK"],
};
// console.log(person.hobbies);--> ["Playing Cricket", "Listening to music", "Reading about GK"]--> it is a dot notation.
// or console.log(person["hobbies"])--> it is a bracket notation
/* How to add a new key value pair to objects */
// person["gender"] = "Male"; // or Person.gender="Male".
// console.log(person); // Whole elements of the object will be printed out.

/* Difference between dot and bracket notation. */
const key = "email";
const Person = {
  name: "Shikhar",
  age: 22,
  "Person hobbies": [
    "Playing Cricket",
    "Listening to music",
    "Reading about GK",
  ],
};
/* How to insert */
Person[key] = "shikhar@gmail.com";
console.log(Person);
console.log(Person["Person hobbies"]); // you cannot access variables separated by space with dot notation.
