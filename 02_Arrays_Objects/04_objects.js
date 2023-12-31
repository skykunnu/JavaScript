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
// console.log(Object.keys(Person)); // it will list down all the keys of an object.

// For of loop
for (let key of Object.keys(Person)) {
  // console.log(key);
  // console.log(Person[key]);
}

/**************Spread Operator in Objects************* */

const obj1 = {
  key1: "Value-1",
  key2: "Value-2",
};

const obj2 = {
  key3: "Value-3",
  key4: "Value-4",
};

const newObject = { ...obj1, ...obj2, key6: "value-6" }; // new key is added along with objects.
// console.log(newObject);

let currentDate = new Date();
console.log(currentDate.toLocaleTimeString());
console.log(currentDate.toLocaleDateString());
