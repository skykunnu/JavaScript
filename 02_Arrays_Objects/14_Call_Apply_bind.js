// Call,Apply,bind methods.--> Important for Interviews.
"use strict";

function checkThis() {
  console.log(this);
}
// checkThis(1); // Undefined, because the 1 is passed as an argument not as context and also in this case 'this' keyword is pointing to global object.
// checkThis.call(1); // when we call the function using .call then the first value will go and act as a context of 'this' keyword.

//-------------------------------------------------------------------

let person = {
  checkThis: function () {
    console.log(this);
    function checkThisAgain() {
      console.log(this);
    }
    // checkThisAgain.call(this); // without .call, the output of line 16  would be undefined but due to .call it will be person object and also it is explicitly setting the context of 'this' keyword.
  },
};

// person.checkThis();

//------------------------------------------------------------------

let name = {
  firstName: "Shikhar",
  lastName: "Khandelwal",
};

let fullName = function (arg1, arg2) {
  console.log(`${this.firstName} ${this.lastName} is a ${arg1} and ${arg2}.`);
};

// fullName("Programmer", "Consultant"); // Erorr , because of 'this' keyword as there is no context of 'this' keyword.

fullName.call(name, "Programmer", "Consultant"); // Shikhar Khandelwal is a Programmer and Consultant., As we already know first argument of .call() is a context of this keyword.

// without call you cannot set the context and vice-versa.
