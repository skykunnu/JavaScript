// This Keyword- It basically refers to the current execution context or the object that the function is being called on.

/* In General , the value of this keyword is determine by the calling context. */

// Inside a object-

function personInfo() {
  console.log(`Person name is ${this.firstName} and person age is ${this.age}`); // here this keyword is pointing to obejcts such as (Person1,2 & 3).
}

const Person1 = {
  firstName: "Shikhar",
  age: 23,
  about: personInfo,
};

const Person2 = {
  firstName: "Yash",
  age: 22,
  about: personInfo,
};

const Person3 = {
  firstName: "Harshit",
  age: 22,
  about: personInfo,
};
// Person1.about(); // this keyword is pointing to Person1 obj
// Person2.about(); // this keyword is pointing to Person2 obj
// Person3.about(); // this keyword is pointing to Person3 obj

// !! console.log(this); // Window object will be the output,
/* As this keyword is used in the global context and in web based environment, the global object is usually 'window'. */

// if there is a Node-based environment then this keyword will refer to empty object.

// Inside a Regular function
function Inside() {
  console.log(this);
}
Inside(); // Inside a function, the value of this depends on how the function is called. If the function is a regular function (not a method of an object), this in that function will again refer to the global object (window in a browser environment).

//

const person = {
  checkThis: function () {
    console.log(this);
  },
};
person.checkThis();
console.log(person);
