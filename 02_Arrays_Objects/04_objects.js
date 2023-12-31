/* How to iterate object*/
const Person = {
  name: "Shikhar",
  age: 22,
  "Person hobbies": [
    "Playing Cricket",
    "Listening to music",
    "Reading about GK",
  ],
};

// for in loop --> returns the values of the keys of an object
for (let person in Person) {
  // console.log(Person[person]);
}
for (let key in Person) {
  // console.log(key); // it will list down all the keys present in the Person Object.
  // console.log(Person.key); // it's output will be undefined because it will search for a key having name key.
  // console.log(Person[key]); --> this is a correct way to access the keys of an object.
  // If you want key-value pair together use template string.
  // console.log(`${key} : ${Person[key]}`);
}

// Object.keys
