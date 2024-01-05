const user1 = {
  firstName: "Shikhar",
  LastName: "Khandelwal",
  email: "shikharkhandelwal27@gmail.com",
  age: 22,
  address: "Triveni Nagar,Jaipur",
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 22;
  },
};

// But what if we want multiple users. To cater this we will create a function.
/* 
1. function (This function will create object )
2. add key value pair
3. then it will return the object.
*/
