// Prototype--> Important for Interviews

// Javascript function ==> function + object

// With Prototype you can add your own properties;

// whenever we create a function , function gives us a free space which is called prototype.
// In Js, Each functions has Prototype property.
// In JS, Each Object has Prototype Chain.

// With arrow function you cannot use prototype property, becoz arrow function doesn't have their own 'this' keyword. this is the main reason they cannot use prototype property.  


function createUser(username,score){
  this.username=username;
  this.score=score;
}
// with prototype you can define new properties for your object just like below.
createUser.prototype.increment=function(){
  return(`Your score after drinking is ${(this.score)=(this.score)+1}`);
}

createUser.prototype.printMe=function(){
  return(`price is ${this.score}`);
}
/* Without new keyword --> All will be undefined because user1 and user2 don't know where are these new properties located.  */
const user1=createUser("chai",25);
const user2=createUser("tea",250);
// console.log(user1); // undefined, because this keywords are refering to global environment.  
// console.log(user1.printMe); // Undefined, becoz there is no such thing like printMe and increment inside the createUser func
// console.log(user2.increment); // Undefined



/* With new keyword

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and method defined on the constructor's prototype. 

3. The constructor is called: The constructor function is called with specified arguments and 'this' keyword is bound to newly created object.
If no explicit return value is specified from the construtor , JS itself returns the newly created object.

4. The new object is returned.
*/


const user3=new createUser("chai",25);
const user4=new createUser("tea",250);

// console.log(user1);
// console.log(user2.increment());




//-------------------------------------------------------------------------------------------------------------------------------------------------------
let anotherUsername="ChaiAurCode           ";
String.prototype.trueLength=function(){
    console.log(`${this}`); // here this refers to String itself, because the prototype is of string and we know prototype in jS sets the Execution context. 
    console.log(`True length is: ${this.trim().length}`);
} 
// anotherUsername.trueLength();
// "Shikhar   ".trueLength();

// linking of two object--> __proto__

const user={
    name:"chai",
    email:"chai@gmail.com"
}

const teacher={
    makeVideo: true
}
const TeachingSupport={
    isAvailable:true,
  
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport // old way of initializing
}

// teacher.__proto__=user;


// Modern Syntax of __proto__.
const user5=Object.setPrototypeOf(TASupport,TeachingSupport); // left hand-> caller,Right hand-> reciever.
// console.log(user5);