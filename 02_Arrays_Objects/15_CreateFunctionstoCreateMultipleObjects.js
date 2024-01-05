// But what if we want multiple users. To cater this we will create a function.
/* 
1. function (This function will create object )
2. add key value pair
3. then it will return the object.
*/

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 22;
  };
  return user;
}

const user1 = createUser(firstName, lastName, email, age, address);
