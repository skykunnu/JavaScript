// Prototype--> Important for Interviews

// Javascript function ==> function + object

// With Prototype you can add your own properties;

// whenever we create a function , function gives us a free space which is called prototype.
// Only functions provides Prototype property.

// function hello(){
//     console.log("hello world");
// }
// console.log(hello.prototype); // {  }--> Empty Object, this is a free space provided by a function to a prototype , to store the key value pair to be later used by function.
const hello=function(){
    console.log("hello");
}

// if(hello.prototype){
//     console.log("Prototype is present");
// }

// else {
//     console.log("prototype is not present");
// }

hello.prototype.abc="xyz"; // adding key-abc and value-xyz into a hello function.
hello.prototype.xyz="abc";
hello.prototype.sing=function(){ // adding function as a key value pair using prototype into a hello function. 
    return "la la la lala kai su hun lailaaa har koi chahein mujhse milna akela"
}
// console.log(hello.prototype.sing());
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const userMethods = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
//   };

  //single function
  function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype); // prototype property is passed as an argument .  syntax and as well as { } Empty object. Explanation of line-60 first js will see in user that there is something (createUser) is there or not, if it is not there, then it will check to its prototype , which in this case is createUser.prototype, which is passed as an argument and we know that it is define over there and from there it will return to the user. And that's how this prototype property works. !! Important for Interviews.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
  }
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18=function(){
    return this.age >= 18;
}
createUser.prototype.sing=function(){
    return "zara zara behkta behkta aaj toh mera tann badan mein pyaasi"
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

  console.log(user1.about());
  console.log(user2.about());
  console.log(user1.sing());
  console.log(user2.sing());
  