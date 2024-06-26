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
// Inside(); // Inside a function, the value of 'this' depends on how the function is called. If the function is a regular function (not a method of an object), 'this' in that function will again refer to the global object (window in a browser environment).

const person = {
  checkThis: function () {
    // "use strict"; // It is used to stabilise the this keyword context and remove the global object.
    // let self = this; // irrespective of which function you are using this keyword it will always point to an object.
    console.log(this); // Person object.

    function checkThisAgain() {
      // this.name = "Shikhar"; // it is pointing to the global object which is window where method name is defined as shikhar.
      console.log(this); // However, because checkThisAgain is a regular function (not a method of an object) and is not called as a method on an object, the 'this' inside it refers to the global object (Window in a browser environment). or // it will give undefined, becoz when we use strict keyword it will remove the default context (Windows).
    }
    // checkThisAgain();
    // console.log(this.name); // Undefined, because here 'this' is pointing to person object not the window object. inside person object no name is defined. or If we use self instead of this keyword, the output will be Shikhar. as self is capturing the value of this from the outer function, where it still refer to the person object.

    // console.log(name); // Shikhar, because this.name is defined inside the window object. or when use self , output will be shikhar.
  },
};
// person.checkThis(); // 1st log statement will give output as person object, 2nd log statement will give Undefined due to use strict mode and for non strict mode 1st log will give same output and 2nd log will give windows obejct as a output.

const func = person.checkThis;
// func(); // As there is no calling context by default the output will be window object.

console.log(person.checkThis()); // Output--> (Strict mode) for 1st log statement-->Person object, 2nd Log statement--> Undefined due to strict mode and for own 64th line--> undefined becoz , Since there is no explicit return value, method implicitly returns undefined. (Non-Strict mode)--> 1st log--> person object ,2nd Log--> Windows object and 64th line log--> undefined becoz of no return value by method.


// Inside a Arrow function 

// Arrow function don't have 'this' binding--> Meaning the value of 'this' is lexically scoped. This means that value of 'this' inside an arrow function
// is determined by the surrounding scope (the context in which the arrow function is defined).

const person1={
  name:'Shikhar',
  skills:['HTML','CSS','JavaScript'],

showskills(){
  this.skills.forEach(skill=>{
    console.log(`${this.name} is skilled in ${skill}`)
  });
}
};

person1.showskills(); // Shikhar is skilled in HTML
// Shikhar is skilled in CSS
// Shikhar is skilled in JavaScript



// In above code 'this' keyword refers to the object (person) from which you define the function and showSkills is defined as a regular function and they have their own this context.


const person2={
  name:'Shikhar',
  skills:['HTML','CSS','JavaScript'],

showskills:()=>{
  this.skills.forEach(skill=>{
    console.log(`${this.name} is skilled in ${skill}`)
  });
}
};

person2.showskills(); // undefined, error in reading.

// In above code 'this' keyword will give undefined error because you have written showSKills() method as an arrow function.
//(In this case 'this' keyword refers to the global object and there the skills property is undefined)


