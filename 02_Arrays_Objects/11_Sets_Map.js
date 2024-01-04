// Sets(It is iterable)
// Store data, has its own methods, No index based access,Unique items/element only, order is not guaranteed.

// Syntax
const Numbers = new Set([1, 2, 3]);
console.log(Numbers);
const numbers = new Set();
numbers.add(1); // add function--> to add something in a empty set.
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(["item1", "items2"]); // this is different than below as both of them have different memory locations.
numbers.add(["item1", "items2"]);
// console.log(numbers);

//------------------------------------------------------------------------------------------------------------------------------------
// Map Method
