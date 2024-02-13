// Promise && setTimeout

// I want to resolve and reject promise after 2 sec

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value=true;
        setTimeout(()=>{
          if(value){
            resolve();
          }
          else{
            reject();
          }
        },2000)
    })
}

// myPromise()
// .then(()=>{
//     console.log("resolved");
// })
// .catch(()=>{
//     console.log("rejected");
// })

//----------------------------------------------------------------------------------------------
/* Promise.resolve && Promise chaining */

// const myPromise=Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })


function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    }) 
}

// myPromise().then((value)=>{
//     console.log(value);
//     value+="bar";
//     return value; //--> (By seeing the value you must be thinking a string is return) but here value is not returned , here promise is returned. Internally the representation of value--> Promise.resolve(value).
// }).then((value)=>{
//     console.log(value);
// })


