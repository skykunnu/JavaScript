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

// object literals
const person = {
  name: "Shikhar",
  age: 22,
  hobbies: ["Playing Cricket", "Listening to music", "Reading about GK"],
};
console.log(person.hobbies);
