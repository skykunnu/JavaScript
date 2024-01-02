// Sort Method
/* this method sorts strings only, means if anything is not a string, it will first convert it into string and then sort it according to their ASCII values and in comparision it will take the first number from the left-hand side. And for character string it will sort in alphabetical order.*/

const number = [5, 9, 1200, 410, 3000];
// sort-> [5,9,410,1200,3000] (Expected).
number.sort();
// console.log(number); // [ 1200, 3000, 410, 5, 9 ] first converted to string and then sort according to ASCII values.

const userName = ["shikhar", "harshit", "yash", "prakhar"];
userName.sort();
console.log(userName); // [ 'harshit', 'prakhar', 'shikhar', 'yash' ] Sort according to alphabetical order.

//------------------------------------------------------------------------------------------------------------------------

// Find method
