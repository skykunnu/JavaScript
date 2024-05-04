// Deep Copy - It means that all the values of the new variables are copied and disconnected from the original variable.
// Shallow Copy - It means that certain sub values are still connected to the original variables.

const foodItems={
 food1: "Pasta",
 food2: "Pizza",
 food3: "Chowmein",
 food4: "Lassi"
}

let anotherFood=foodItems; // copying(refrencing) of object(foodItems) into new variable.

// anotherFood.food1="Panner Tikka"

// console.log(anotherFood.food1) // Panner Tikka 
// console.log(foodItems.food1) // Panner Tikka 
// Why both of them have same values? because both new & old variables are pointing to same memory location, That means change of values in any of them will reflect in both. 


// hence In above example we actually made a shallow copy.

// To overcome shallow copying issue, let's have a look at how we can make deep copies of object and arrays without nested objects and arrays.
/*

// Object's Method:-

1. Spread operator
2. Object.assign()

// Array's Method:-

1. Spread Operator
2. Array functions (Map,reduce,filter)
3. Array.slice()

but a problem arises in both the above methods is when we try to copy nested object into a new variable , since the nested object inside an object will not 
copied, since they are only references. hence you would end up doing (SHALLOW COPY).


// To avoid the shallow copy and make a deep copies of nested objects and nested arrays

1. JSON.Parse(JSON.Stringify(foodItems)) --> first stringify converts object to string representation and this representation does not maintain any reference.

*/

// Example for nested object

const animals={
    name:"Dog",
    foods:{
        morning:"Milk",
        afternoon:"Pedigree",
        evening:"RotiMixture"
    }
}

let b=JSON.parse(JSON.stringify(animals)) //-> animals object is converted into JSON string and while parsing it is converted into object again making a new object having the values of old ones.

b.foods.morning="bones"

// console.log(b.foods.morning) // bones
// console.log(animals.foods.morning) // Milk


// Example for nested array
const Destination=['Jaipur','Udaipur',['Dubai','Australia','Sri-Lanka','Bhutan'],'Mumbai','Agra']

let newDestination=JSON.parse(JSON.stringify(Destination))
newDestination[2]=['Europe','Kenya','Turkey','Egypt']

// console.log(newDestination[2]) // [ 'Europe', 'Kenya', 'Turkey', 'Egypt' ]--> new varible
// console.log(Destination[2]) // [ 'Dubai', 'Australia', 'Sri-Lanka', 'Bhutan' ]--> old variable
