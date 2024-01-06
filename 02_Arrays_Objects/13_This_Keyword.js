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

// if there is a Node-based environment then this keyword will point to empty object.

// Inside a Regular function
function Inside() {
  console.log(this);
}
// Inside(); // Inside a function, the value of this depends on how the function is called. If the function is a regular function (not a method of an object), this in that function will again refer to the global object (window in a browser environment).

//

const person = {
  checkThis: function () {
    // "use strict"; // It is used to stabilise the this keyword context.
    // let self = this; // irrespective of which function you are using this keyword it will always point to an object.
    console.log(this); // Person object.

    function checkThisAgain() {
      this.name = "Shikhar"; // it is pointing to the global object which is window.
      console.log(this); // However, because checkThisAgain is a regular function (not a method of an object) and is not called as a method on an object, the 'this' inside it refers to the global object (Window in a browser environment). or // it will give undefined, becoz when we use strict keyword it will remove the default context (Windows).
    }
    checkThisAgain();
    console.log(this.name); // Undefined, because here 'this' is pointing to person object not the window object. inside person object no name is defined. or If we use self instead of this keyword, the output will be Shikhar. as self is capturing the value of this from the outer function, where it still refer to the person object.

    console.log(name); // Shikhar, because this.name is defined inside the window object. or when use self , output will be shikhar.
  },
};
//person.checkThis(); // pointing to the object itself becoz callie of the method is person, which is an object.
//console.log(person); // pointing to the object itself

const func = person.checkThis;
//func(); // As there is no calling context by default the output will be window object.

// console.log(person.checkThis());
