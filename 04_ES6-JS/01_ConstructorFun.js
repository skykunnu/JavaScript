// Constructor Function --> Important for interviews.
/*They are used to create objecrs based on a template (in this case, the 'user' function). */
/*This user function is designed to be used with the 'new' keyword,creating instances of the user object.*/

function user(username,loginCount,isLoggedIn){
    /* here this keyword refers to the current instance of the object being created. when you create a new instance using 'new user()' 'this' points to that specific instance.  */
    this.username=username; 
    this.LoginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        return`Welcome ${this.username}`;
    }
    return this; // it's not necessary to use return as 'new' keyword automattically returns the created object.

}
// const User1=user("Shikhar",12,true);
// const User2=user("harshit",20,true);
// console.log(User1); // Output shall be windows object and inside the windows object it will have all the input parameters
// but after initializing new user (User-2) and then taking log of User1 we found that values of user1 got overided by the User2. So therefore it is a big issue in itself.
// to Avoid such overiding issues we have to make use of new keyword (Constructor function). 

// Below are the two Instances of user function.
const User1= new user("Shikhar",12,true);
const User2=new user("harshit",20,true);
// console.log(User1.greeting());
// console.log(User2);
console.log(User1 instanceof user); // Obviously true , becoz object referenced by User1 is an instance of user function(as the empty object was created inside the user function). 
console.log(User1 instanceof Object); // true,becoz object(Empty object) referenced by User1 is an instance of object and in JS all Objects inherit from the Object constructor. 

