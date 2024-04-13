// 3 Ways to store data inside of a browser.  

/*
LocalStorage--> It is a Property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. 
This means that the data will remain stored as it is even after the user closes the browser, restarts the computer or reload the application page.*/

/* Few Points about Local_Storage
1. It is a window object property.
2. Use local storage to store only small amounts of data. 
3. localStorage is stored in SQLite file in a subfolder in the user's profile.
4. LocalStorage can only store strings. To store arrays or objects, you would have to convert them to strings.
To do this, we use the JSON.stringify() method before passing. 
*/

/* Web Storage API 
Local storage is one of two mechanisms for the web storage API, the other being Session Storage

Session Storage--> It is a storage that stores the data for a single session only. 
Local Storage--> It stores the data that did'nt expire. 
*/

/* Local Storage Working

1. LocalStorage.setItem():- Add key and value to local Storage.
2. LocalStorage.getItem():- Through this function you get items from local Storage.
3. LocalStorage.removeItem():- Remove an item from local Storage.
4. LocalStorage.clear():- Clear all data from Local Storage. 
5. key():- passed a number to retrieve the key of a local Storage. 

*/

/* Cookies-> It is also one of the way to store a data in a browser. 
Much older than local and session storage. but rarely used due to its smaller capacity. 
To use cookie --> document.cookie (key value pair only). 
*/
//----------------------------------------------------------------------------------------------------

/* Using Strings */

const nameElement=document.querySelector('.name-tag');
const nameInput=document.querySelector('.name');
const ageElement=document.querySelector('.age-tag');
const ageInput=document.querySelector('.age'); 




// nameElement.innerText=localStorage.getItem('myName');

// nameInput.addEventListener('input',(e)=>{
// // localStorage.myName=e.target.value; // Also right but not recommended.
// localStorage.setItem('myName',e.target.value); // right method to set something. (It is storing value in local storage).
// // nameElement.innerText=localStorage.myName; // Also right but not recommended. 
// nameElement.innerText=localStorage.getItem('myName'); // right method to get value in local storage (It is displaying value on webpage).

// })

// ageElement.innerText=localStorage.getItem('myAge');

// ageInput.addEventListener('input',(e)=>{
// // localStorage.myName=e.target.value; 
// localStorage.setItem('myAge',e.target.value);  
// // nameElement.innerText=localStorage.myName;  
// ageElement.innerText=localStorage.getItem('myAge'); 
// })

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


/* Using Objects */


// This is a fixed structure with predefined properties. It is appropriate to use when you have fixed data structure and you don't need to preserve exisitng data. 

/* const myData={   
   myName:"",
   age:"",
 } */

//This stores dynamic data and preserve exisiting and parse it into myData, if its present or if there is no existing data it will return empty object as JSON.parse part will become null. 

const myData=JSON.parse(localStorage.getItem('myData')) || {}; 

// This below statement will store the data even after closing the application.
// nameElement.innerText=myData.myName;
// ageElement.innerText=myData.age;

nameInput.addEventListener('input',(e)=>{
  myData.myName=e.target.value;
  localStorage.setItem('myData',JSON.stringify(myData)); // Converting myData object into string using JSON.Strongify and vice-versa using JSON.Parse.
  const parsedName=JSON.parse(localStorage.getItem('myData')); // Converting myData back to object using JSON.parse.
  nameElement.innerText=parsedName.myName;
  // nameElement.innerText=myData.myName; //--> Also Right. both parsed and this will give same answer. 
})


ageInput.addEventListener('input',(e)=>{
    myData.age=e.target.value;
    localStorage.setItem('myData',JSON.stringify(myData));
    const parsedAge=JSON.parse(localStorage.getItem('myData'));  
    ageElement.innerText=parsedAge.age;
    //  ageElement.innerText=myData.age;// --> Also Right.
})


//----------------------------------------------------------------------------------------------------------------------------















