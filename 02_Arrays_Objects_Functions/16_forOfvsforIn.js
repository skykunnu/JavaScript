// For of loop in array

const fruits = ["Apple", "Orange", "banana", "Guava"];
const fruit2 = [];
for (let fruit of fruits) {
  // format --> for(let (anyname-for ex fruit,vegetables etc) of {arrayname-> only name with which the array is initialized.}). --> ()-> means it can contain any name. {}-> means only name of the array will be used.
  fruit2.push(fruit);
}
// console.log(fruit2); // ["Apple", "Orange", "banana", "Guava"];

// ------------------------------------------------------------------------------------------------------------------------------------------
// For in loop in array -> (Always returns the index of an element).
const cars = ["BMW", "Mercedes", "Audi", "Rolls Royce"];
const cars2 = [];
for (let car in cars) {
  cars2.push(cars[car]);
  // console.log(car); // this will return the index value of each of the element.
  // console.log(cars[car]); // this will return the elements of the array.
}
// console.log(cars2);