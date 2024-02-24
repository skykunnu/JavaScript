// fetch

// const URL="https://catfact.ninja/fact";
// console.log("Start");
/* fetchData will get promise in return and their execution is done by web API. 
and after their execution in web Api it will go to promise queue and then to call stack.*/              
/*
const fetchData=()=>{
    fetch(URL)
    .then((response)=>{
        console.log("then 1");
        return response.json(); // Converting the response into json format which is in the form of objects.
    })
    .then((data)=>{ 
        console.log("then 2");
      console.log(data); // It will return the data converted into json in above .then() method.
    })
    .catch((error)=>{
        console.log("error");
    })
    .finally(()=>{ // No matter error will come , the .finally() will always come in last.
        console.log("all done");
    })
};
fetchData();
console.log("Stop");
*/



// Doing above task using Async/Await

// using async in a function makes it asynchronous in nature means its execution will performed somewhere in the background in a browser
// await is used to pause the execution further until the promise returned by fetch(URL) and response.json is resolved.

// The below code describe the flow of execution by js in case of async/await.
/*
console.log("S1");
const fetchData1=async()=>{
    console.log("f1");
   const response=await fetch(URL);
   console.log("f2");
   const data=await response.json();
   console.log("f3");
   console.log(data);
}
fetchData1();
console.log("S2");
console.log("S3");
console.log("S4");
console.log("S5");
console.log("S6");
console.log("S7");
console.log("S8");

// Output
/*
S1
f1--> why S2 after f1 not f2 because of await keyword will pause or freeze the below code until the promise returned is resolved.
S2
S3
S4
S5
S6
S7
S8
f2
f3
data
*/

const URL="https://catfact.ninja/fact";

// Wherever promise is returning , we will put await over there.


// const fetchData=async()=>{
//    const response=await fetch(URL);
//    const data=await response.json();
//    console.log(data);
// };
// fetchData();
// Will not use this .catch() to catch error because of chaining.
// .catch((error)=>{
// console.log("Something went wrong");
// })



// Error Handling--> It can be done by inbuilt methods like try/catch.


// const fetchData=async()=>{
//     try {
//         const response=await fetch(URL);
//         const data=await response.json();
//         console.log(data);
       


// } 
// catch (error) {
//  console.log(error.message);// this will output a message saying--> Failed to fetch or you can make your own error using throw new error("You can write anything over here").
// }
//  };
//  fetchData();
