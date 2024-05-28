
 // // For of loop --> It is a loop that operates on a sequence of values sourced from an iterable object(like array,strings,map,set,nodelist etc)

 // 1. Array
 const fruits=['Apple','Banana','Orange','Mango']

 // How const? because in this loop for every iteration a new const fruit variable is formed and due to this it will not throw any error. 
 for(let fruit of fruits){ // here we can use all three variable type:- let,const & var.  
     console.log(fruit)
 }
// 2. Strings
const user='Shikhar Khandelwal'

for(let letter of user){
  console.log(letter) // it will print each every letter of user in a seperate line. 
}

console.log("------- -------- -------")
// // ------------------------------------------------------------------------------------------------------------------------------------------
// // For in loop --> It is a loop in js used to iterate over the enumerable properties of object. (enumerable- it means to iterate over items in collection)

// const cars = ["BMW", "Mercedes", "Audi", "Rolls Royce"];
// const cars2 = [];
// for (let car in cars) {
//   cars2.push(cars[car]);
//   // console.log(car); // this will return the index value of each of the element.
//   // console.log(cars[car]); // this will return the elements of the array.
// }
// // console.log(cars2);


// object--> In case of object, for of loop cannot be directly used to iterate over the properties because objects are not iterable. so therefore for in loop is used. 
// But generally it is not recommended to use for in loop due to performance issue. to overcome this issue it is recommended to use object.keys(object_name)
// And on object.keys() you can use for of loop. 

const person={
  firstName:'Shikhar',
  lastName:'Khandelwal',
  age:23,
  eyeColor:'black',
  city:'Bangalore'
}

// for(let key in person){
//   console.log(person[key]) // Shikhar,khandelwal,.. and so on.
// }

const personKey=Object.keys(person) // It stores keys of object like(firstName,lastName and so on)
const personValue=Object.values(person) // It stores values of object like('Shikhar','Khandelwal', and so on) 
const personEnteries=Object.entries(person) // It stores the nested array of key and value. 

// for(let key of personKey){
//   console.log(person[key])
// }


for(let key of personKey){
  console.log(person[key])
}



