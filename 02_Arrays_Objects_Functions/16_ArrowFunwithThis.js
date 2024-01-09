// Arrow function with this keyword
/* In case of arrow function this keyword acts differently , means it points to outer environment object and outer environment object is Window object.  */
const user = {
  firstName: "Shikhar",
  Age: 22,
  about: () => {
    console.log(this); // this will point to window object.
    console.log(this.firstName, this.Age); // Undefined , Undefined.
  },
};
// user.about(); // No call ,apply or bind method can change the execution context of this keyword.
console.log(user.about());