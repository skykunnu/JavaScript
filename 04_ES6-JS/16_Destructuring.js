
// Array Destructuring 

let arr=['Shikhar','Khandelwal'];

// Destructuring assignments-(behind the scene)
/* 
set firstName=arr[0]
set LastName=arr[1]
*/
let [firstName,LastName]=arr

// console.log(firstName)
// console.log(LastName)

const colors=['red','green','yellow','pink','black']


// const color1=colors[0]
// const color2=colors[1]
// const color3=colors[2] and so on 

// So to avoid above thing we have 

const[color1,color2 ,color3,color4,color5]=colors
// const[color1,,color3,color4,color5]=colors // as we don't want color2 so we replaced it by extra comma 

// console.log(color1) // red
// console.log(color2) // green / undefined
// console.log(color3) // yellow
// console.log(color4) // pink
// console.log(color5) // black

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Object Destructuring 

const user={
    name:'Shikhar',
    age:24,
    address:{
        city:'Jaipur',
        state:'Rajasthan'
    },
};
  
  // variable name will be same as object properties. 
  // If we want to assign property name with some another name we can do it by using colon.  

  const {name:N,address:{city,state}}=user

//   console.log(N); // Shikhar
//   console.log(city); // Jaipur
//   console.log(state); // Rajasthan

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// destructuring objects with JS functions

function intro({age,name}){ // destructuring user object with only age property.
    console.log(age,name) // 24 Shikhar
}

// intro(user) // user object passed.

// destructuring arrays with JS functions 

function colorPalette([firstcolor,,thirdcolor]){ // destructuring colors array with only first color and second color. 
    console.log(firstcolor) // red
    console.log(thirdcolor) // yellow
}

// colorPalette(colors) 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------