/*
Objects- (Reference type or Non-Primitive)
-> Objects store key value pair.
-> Objects don't have index
*/
// -------------------------------------------------------------------------------------------------------------------
// singleton

//   1. whenever we declare object with literals, then no singleton is formed.
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
/* How to insert a value of a variable inside a object as a key */
// Person[key=email] = "shikhar@gmail.com"; // simply place the variable without quotes in square brackets.
// console.log(Person);
// console.log(Person["Person hobbies"]); // you cannot access variables separated by space with dot notation,So therefore use bracket notation.
// console.log(Person.Person hobbies); // this will give you error. 

//---------------------------------------------------------------------------------------------------------------------------------------------
// Object.freeze() & Object.seal()

// Object.seal()--> This function prevents object from further addition and deletion of properties, but you can change the value's of existing properties.
// Object.freeze()--> This function prevents everything even the changing of existing values.

// in keyword--> This keyword checks whether the required property is present or not. 

const user={
  firstName:"Shikhar",
  lastName: "Khandelwal",
  address:{
    city:'Jaipur',
    pincode: 302018,
    state:"Rajasthan",
    moreDetails:{
      population: 30000000,
      area:'787 sq km'
    },
  },
  age:23,
  isGraduate:false
}


// Object.seal(user); --> Only user object is sealed not address object.
// Object.seal(user.address) --> Only address obejct is sealed not user.

// Object.freeze(user) --> Only user object is freezed not nested object.
// Object.freeze(user.address) --> Only address object is freezed. 
// console.log('age' in user); // true
// console.log('mobileNo' in user); // false


























