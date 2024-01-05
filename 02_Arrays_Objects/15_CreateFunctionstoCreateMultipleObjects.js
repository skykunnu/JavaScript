const user = {
  firstName: "Shikhar",
  LastName: "Khandelwal",
  email: "shikharkhandelwal27@gmail.com",
  age: 2,
  address: "Triveni Nagar,Jaipur",
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 22;
  },
};
