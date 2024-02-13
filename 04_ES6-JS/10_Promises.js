//  Intro to Promises. (It works Asynchronously and it is the feature of browser not js.)
// Promise--> It represents future value.

// console.log("Scripts starts.");
const bucket=['coffee','chips','vegetables','rice','salt'];

//Executor function.
//Creation or production of promise.
/* Promise is a object having two callbacks resolve and reject.  */

const friedRicePromise=new Promise((resolve,reject)=>{
if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
    resolve({value:"fried rice"}); // It can be any value like string,number,array,object.
}
else{
    reject(new Error("Something is missing from object")); // It can have any value like string ,array,object and new error object.
}
})

// Consumption of promise--> it will be consumed by the browser.
/*.then method is executed when promise is resolved.*/

// friedRicePromise.then((myfriedrice)=>{
//     // when your promise is resolved.
//     console.log("lets eat", myfriedrice);
// })
// .
// /* .catch method is executed when promise is rejected.*/
// catch((error)=>{
//     // when your promise gets rejected.
// console.log(error);
// })

// for (let index = 0; index < 100; index++) {
//     console.log(index);
    
// }

// console.log("Scripts end");

//----------------------------------------------------------------------------------------------------------

/* Function returning promise */

function ricePromise(){
    const bucket=['coffee','chips','vegetables','rice','salt'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value:"fried rice"}); // It can be any value like string,number,array,object.
        }
        else{
            reject(new Error("Something is missing from object")); // It can have any value like string ,array,object and new error object.
        }
        })
}

ricePromise().then((friedrice)=>{
    // when your promise is resolved.
    console.log("lets eat", friedrice);
})
.
/* .catch method is executed when promise is rejected.*/
catch((error)=>{
    // when your promise gets rejected.
console.log(error);
})