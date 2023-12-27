let score="Shikhar"

// console.log(typeof score);
// console.log(typeof(score));
let valueInNumber=Number(score)
// console.log(valueInNumber); // Nan- Not a number. 

// // "33"=> 33
// // "33abc"=>NaN
// // true=>1; false=>0

let isLoggedIn ="Shikhar"
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" => false
// "Shikhar"=> true

let someNumber=33
let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************Operations*********************
let value=3
let negValue=-value
//console.log(negValue);

let str_1="Shikhar"
let str_2="Khandelwal"
// console.log(str_1+str_2);

// console.log("1"+2 + 2); // 122 because "+" operator will first type coerce(Converts number to string)the left operand then next and so on.  
// console.log(1+2 + "2");  // 32 because "+" operator is left associative means it is calc from left to right. (1+2) took place and then type coerced was done. 
// console.log(1+2); // 3
// console.log(+"");  // 0 , because empty string is coerced into number. 
// console.log("1"-"1"-"1"-2); // -3 because the "-" operator (converts a string to num) and type coercion takes place from left to right. 
// console.log(+"Hello"); // Nan, because the Unary operator converts the operand into num. if an invalid num is there, then it outputs Not a Number (Nan). 
let num1,num2,num3
num1=num2=num3=2+2
let game=100
let change=game++
// console.log(game);
// console.log(change);
