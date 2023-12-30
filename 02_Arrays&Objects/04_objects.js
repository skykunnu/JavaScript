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

// for in loop --> returns the keys of an object
for (let person in Person) {
  console.log(Person[person]);
}
