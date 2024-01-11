// Creating Multiple objects from a single function.

//To cater this question, we will create a function.
/* 
1. function (This function will create an empty object )
2. add key value pair
3. then it will return the object.
*/

// Why we have created the separate object for these two methods, because it would take million memory location to store same methods for different million user rather than taking large memory location we have create a particular object to store these methods and will call them in our createUser function.
// while the Regular function has a prototype property and the object has __proto__ property.

/* Let's say we want to add multiple methods in createUser function from the userMethods object, but to do this it will take time and it's  a tedious work to do. So, To overcome this issue we have something known as __proto__ obejct concept. */
// __proto__ ==> [[prototype]] (other way of representing proto object.)

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
//single function
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // __proto__  syntax and as well as { } Empty object. Explanation of line-60 first js will see in user that there is something (aboutmethod) is there or not, if it is not there, then it will check to its proto object, which in this case is userMethods, which we passed as an argument and we know that it is define over there and from there it will return to the user. And that's how this __proto__ object works. !! Important for Interviews.
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
// Multiple Users
const user1 = createUser(
  "Shikhar",
  "khandelwal",
  "sky@gmail.com",
  "22",
  "Jaipur"
);
const user2 = createUser(
  "Rashi",
  "khandelwal",
  "Rashi@gmail.com",
  "24",
  "Jaipur"
);
const user3 = createUser(
  "Dikshant",
  "Gupta",
  "diksy@gmail.com",
  "22",
  "Jaipur"
);
const user4 = createUser(
  "Darshit",
  "Gupta",
  "darshit@gmail.com",
  "20",
  "Jaipur"
);

// console.log(user1.about()); // Shikhar is 22 years old. Although there is nothing like (about()) inside createUser function then also it is able to give the output which was expected, it is because of proto object concept. see at line 22.
// console.log(user2.about()); // Rashi is 24 years old.

// console.log(user1); // User 1 info will be printed out in Object format and similarly for the rest of the user.
