// This Keyword- It basically points to the object to retrieve informations.

function personInfo() {
  console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
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
Person1.about(); // this keyword is pointing to Person1 obj
Person2.about(); // this keyword is pointing to Person2 obj
Person3.about(); // this keyword is pointing to Person3 obj

// !! console.log(this); // Window object will be the output, it is the global object of Js. here this is pointing to global object.
