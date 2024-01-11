// Call,Apply,bind methods.--> These Methods are used to provide the context . (Important for Interviews.)
"use strict"; // Used for removing defualt global execution context.

function checkThis() {
  console.log(this);
}
// checkThis(1); // Undefined, because the 1 is passed as an argument not as context.
// checkThis.call(1); // when we call the function using .call then the first value will go and act as a Execution context of 'this' keyword.

//-------------------------------------------------------------------

let person = {
  checkThis: function () {
    console.log(this);
    function checkThisAgain() {
      console.log(this);
    }
    checkThisAgain.call(this); // without .call, the output of line 16  would be undefined(strict mode) and windows object(Non-Strict mode) but, due to .call output will be person object(for both mode) and also it is explicitly setting the context of 'this' keyword.
    // checkThisAgain(this);
  },
};

// person.checkThis(); // output will be the person object for 14th log statement. and undefined for 16th line log statement , if 18th statement is called and all these output will come only in use strict mode. for Non strict mode 2nd log statement will point to window object.
//-----------------------------------------------------------------------------------------------------------------------------------------
// console.log(person.checkThis()); // output for this will be for 1st log statement--> person object, for 2nd log statement without call func --> undefined and with call func --> person object and for 24 line log statement will be undefined because, Since there is no explicit return value, method implicitly returns undefined.--> (in use strict mode) and for (Non strict mode), the output for 1st log statement will be person object and fonr 2nd log statement with call func--> person object and without call func--> windows object and for 24 line log statement will be undefined same as that in strict mode.
//-----------------------------------------------------------------------------------------------------------------------------------------

let name = {
  firstName: "Shikhar",
  lastName: "Khandelwal",
};

let fullName = function (arg1, arg2) {
  console.log(`${this.firstName} ${this.lastName} is a ${arg1} and ${arg2}.`);
};

// fullName("Programmer", "Consultant"); // Erorr , because of 'this' keyword as there is no context of 'this' keyword.

// fullName.call(name, "Programmer", "Consultant"); // Shikhar Khandelwal is a Programmer and Consultant., As we already know first argument of .call() is a context of this keyword.

/* without call you cannot set the context and vice-versa. */

//------------------------------------------------------------------------
// Apply method-
//This works in similar way as call do but the only difference between of them is of arguments only, instead of passing only arguments in call method, you can pass the array of arguments in apply method.

let skills = ["Programmer", "Consultant"];
// fullName.apply(name, skills); // Shikhar Khandelwal is a Programmer and Consultant. // or fullName.apply(name, ["Programmer","Consultant"]).

//----------------------------------------------------------------
// Bind Method-
// It is used when you want to set the context of this keyword in case of function Expression.

let a = function () {
  console.log(this); // { }-->Empty object , because with.bind() we have set the context of this word to empty object otherwise this keyword would point to employees object.
}.bind({});

let employees = {
  checkId: a,
  checkThisAgain: function () {
    console.log(this);
  },
};

// // employees.checkId(); //-->{ } Empty Object.
// // employees.checkThisAgain(); //--> Employees object.

// // a();
