// New Keyword
// function createUser(firstName,age){
//         this.firstName=firstName;
//         this.age=age;
// }
// createUser.prototype.about=function(){
//      console.log(this.firstName,this.age);
// };
// const user1= new createUser("harshit",6);
// user1.about();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// new keyword
//1. new kyword is creating the empty object and this keyword is pointing to this empty object.
//2. return this keyword.
//-------------------------------------------------------------------------------------------------------------------------------------------------
// Constructor func.

function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName; // All 'this' keyword inside the function is pointing to an empty object, which is being abstracted. 
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
CreateUserreateUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
}
CreateUserreateUser.prototype.is18=function(){
    return this.age >= 18;
}
CreateUser.prototype.sing=function(){
    return "zara zara behkta behkta aaj toh mera tann badan mein pyaasi"
}
  // Multiple Users
  const user1 = new createUser( // here new keyword is doing everything which is being done in prototype property. without new keyword it will thrown an error as there would not be proper chaining of methods and function.
    "Shikhar",
    "khandelwal",
    "sky@gmail.com",
    "22",
    "Jaipur"
  );
  const user2 = new createUser(
    "Rashi",
    "khandelwal",
    "Rashi@gmail.com",
    "24",
    "Jaipur"
  );

  console.log(user1.about());