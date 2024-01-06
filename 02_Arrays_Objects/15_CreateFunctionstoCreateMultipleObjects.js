// But what if we want multiple users. To cater this we will create a function.
/* 
1. function (This function will create object )
2. add key value pair
3. then it will return the object.
*/

// Why we have created the separate obejct for these two methods, because it would take million memory location to store same methods for different million user rather than taking large memory location we have create a particular object to store these methods and will call them in our createUser function.

/* Let's say we want to add multiple methods in createUser function from the userMethods object, but to do this it will take time and it's  a tedious work to do. So, To overcome this issue we have something known as __proto__ obejct concept. */
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // __proto__  syntax and as well as { } Empty object. Explanation of line-58 first js will see in user that there is something about word is there or not, if it is not then it will check to its proto object which in this case is userMethods which we passed as an argument and we know about is define over there it will return from there to user. that's how this __proto__ object works. !! Important for Interviews.
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

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
  "Shikhar",
  "khandelwal",
  "sky@gmail.com",
  "22",
  "Jaipur"
);
const user4 = createUser(
  "Shikhar",
  "khandelwal",
  "sky@gmail.com",
  "22",
  "Jaipur"
);

console.log(user1.about()); // Shikhar is 22 years old. Although there is nothing like about inside createUser function then also it is able to output the expected output it is because of proto object concept. see at line 18
console.log(user2.about()); // Rashi is 24 years old.
