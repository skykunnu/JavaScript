// const tinderUser = new Object()  // it is a singleton object 
const tinderUser={} // it is a singleton object. 

tinderUser.id="123abc"
tinderUser.name="Shikhar"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={   // object nested in another object. 
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Shikhar",
            lastname: "Khandelwal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj3={5: "a", 6: "b"}


// const obj3={ obj1, obj2}
// const obj4=Object.assign({},obj1,obj2,obj3) // {}- this represents as target and rest all are sources. object.assign(target,source) works in this fashion. 
const obj4={... obj1,...obj2,...obj3} // spread operator can also be used to represent multiple object into one single object. 
// console.log(obj4);

// syntax to used whenever you get values fromn databases. It comes in the fashion of arrays of objects. 
const users=[
{
 id: 1,
 email: "sh@gmail.com"
},
{
    id: 1,
 email: "hk@gmail.com"
},
{
    id: 1,
 email: "hg@gmail.com"
}
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // it returns the keys of tinderUser like- id,name,isLoggedIn.
// console.log(Object.values(tinderUser)); // it returns the value of keys of tinderUser. 
// console.log(Object.entries(tinderUser)); // it returns the key-value pairs in the array format. 
// console.log(tinderUser.hasOwnProperty('isLogged')); // it checks whether the object has this key or not. returns the answer in boolean. 

// Destructuring
/* This is the way to destructure an object.*/

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shikhar"
}
const {courseInstructor: Instructor}=course // first object is assigned as value and one of the keys keyname is changed to something else. this change is called as destructuring. 
console.log(Instructor);

// JSON Syntax
/* it is a JSON Syntax in which key and values both are Strings except value being number.*/ 
// {
// "name": "Shikhar",
// "coursename": "JavaScript",
// "Price":"free" 
// }