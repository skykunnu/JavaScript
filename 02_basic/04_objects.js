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

const obj3={ obj1, obj2}
console.log(obj3);






