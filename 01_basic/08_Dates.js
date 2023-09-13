let myDate=new Date()
// following below are Date Stamps.

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

let myCreatedDate=new Date(2023,0,23) // (YY,MM,DD) and also In JS Month starts from 0. 
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
let CreateDate=new Date("01-12-2023")
// console.log(CreateDate.toLocaleString());
console.log(CreateDate.getFullYear());
console.log(CreateDate.getMonth());
console.log(CreateDate.getDay());

let myTimeStamp=Date.now()
// console.log(myTimeStamp); // result comes in millimeter. 
// console.log(Math.floor(Date.now()/1000)); // convert into seconds. 

let newDate=new Date().toLocaleString('default', { 
    weekday: "long",
}) // define the date according to your Customization. 
