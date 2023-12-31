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
//---------------------------------------------------------------------------------------------------------

/* Object Destructuring */
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 2010,
  AnotherFamousSong: "Zara Zara",
};

let { bandName, famousSong, ...Rest } = band;
// console.log(bandName);

// Nested Destructuring
const Users = [
  { userId: 1, firstName: "Pant", Gender: "Male" },
  { userId: 2, firstName: "Prakhar", Gender: "Male" },
  { userId: 3, firstName: "Harshit", Gender: "Female" },
  { userId: 4, firstName: "Himanshu", Gender: "Male" },
  { userId: 5, firstName: "Yash", Gender: "Male" },
];

const [user1, user2, user3, user4, user5] = Users; // these user1,2 and so on are the indexes containg objects.
// console.log(user1);
const [{ firstName }, , { Gender }] = Users; // here we have rename the 0th index, 2nd index and remove the 1st index.
// this will print the values of 0th index firstName and 2nd index Gender.
// let say if you want to change the name of firstName to userFirstName, Simply use FirstName: userFirstName.
console.log(firstName, Gender); // It will print the firstName of 0th index and Gender of 2nd index.
//------------------------------------------------------------------------------------------------------------
/* Objects inside array --> Useful in Real-life Applications */
const users = [
  { userId: 1, firstName: "Shikhar", Gender: "Male" },
  { userId: 2, firstName: "Prakhar", Gender: "Male" },
  { userId: 3, firstName: "Harshit", Gender: "Male" },
  { userId: 4, firstName: "Himanshu", Gender: "Male" },
  { userId: 5, firstName: "Yash", Gender: "Male" },
];

// for (let user in users) {
//   console.log(users);
// }
