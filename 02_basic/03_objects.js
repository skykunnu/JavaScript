/*
Objects- (Reference type or Non-Primitive)
-> Objects store key value pair.
-> Objects don't have index
*/
// singleton

//   1. whenever we declare object with literals then no singleton is formed.
//   2. when declare with constructor then singleton is formed.
//  object.create- declaration of object using constructor method.

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Shikhar",
  "full name": "Shikhar Khandelwal",
  [mySym]: "myKey1", // to use it as symbol put the variable in square brackets.
  age: 22,
  Location: "Jaipur",
  Email: "shikharkhandelwal27@gmail.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.Email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// to overwrite the values of an object
JsUser.Email = "shikhar@gmail.com";
// Object.freeze(JsUser ) // It freezes all the keys of an object. means you cannot change the keys of object.
JsUser.Email = "Shikhar25@gmail.com";
// console.log(JsUser.Email);

JsUser.greeting = function () {
  console.log("Hello JS Users.");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS Users, ${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
