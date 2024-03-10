// 3 Ways to store data inside of a browser.  

/*LocalStorage--> It is a Property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. 
This means the data stored remain as it is even after the user closes the browser or restarts the computer.*/

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
Local Storage--> It stores the data that won't expire. 
*/

/* Local Storage Working

1. setItem():- Add key and value to local Storage.
2. getItem():- This is how you get items from local Storage.
3. removeItem():- Remove an item from local Storage.
4. clear():- Clear all data from Local Storage. 
5. key():- passed a number to retrieve the key of a local Storage. 

*/

/* Cookies-> It is also one of the way to store a data in a browser. 
Much older than local and session storage. but rarely used due to its smaller capacity. 
*/














