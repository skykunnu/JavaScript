// Constructor Function --> Important for interviews. (Allows you to make multiple instances from single object).


/*They are used to create objects based on a template (in this case, the 'user' function). */
/*This user function is designed to be used with the 'new' keyword,creating instances of the user object(like User1 & User2)*/

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

// new Keyword
/* 1. Whenever you use 'new' keyword, an empty object is created.
   2. A Constructor function is invoked with a new keyword. And an empty object is being created inside a constructor function (abstracted).
   3. All 'this' keywords inside constructor func gets inject into an empty object. 
   4. After Execution, 'new' keyword returns back whole object to the instances. 

*/

// Below are the two Instances of user function.
const User1= new user("Shikhar",12,true);
const User2=new user("harshit",20,true);
// console.log(User1.greeting());
// console.log(User2);
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// instanceof -This method is used to check whether an object belongs to particular class or constructor func. Return type is boolean.

console.log(User1 instanceof user); // Obviously true , becoz object referenced by User1 is an instance of user function(as the empty object was created inside the user function). 
console.log(User1 instanceof Object); // true,becoz object(Empty object) referenced by User1 is an instance of object and in JS all Objects inherit from the Object constructor. 


