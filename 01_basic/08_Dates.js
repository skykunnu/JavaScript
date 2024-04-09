// let myDate = new Date(); //--> This is the way to declare current date & time Object with new keyword.
// console.dir(myDate); // It will display the list of properties associated with the specified object. 
// console.log(myDate); //It will give current day,date and time [Tue Apr 09 2024 13:06:25 GMT+0530 (India Standard Time) 

// Imp Note:- ({hours12:true}--> method to change time from 24 to 12 hr format).

//  The following below are Date Stamps:-

// console.log(myDate.toString()); //It will give current day,date and time [Tue Apr 09 2024 13:06:25 GMT+0530 (India Standard Time) 
// console.log(myDate.toDateString()); // Tue Apr 09 2024
// console.log(myDate.toLocaleDateString()); --> It will give current date in (mm/dd/yy) format.
// console.log(myDate.toLocaleString()); --> It will return current date & time in (mm/dd/yy)format & (HH:mm:ss).(American format)
// console.log(myDate.toLocaleString('en-GB',{hour12:true})); --> It will return current date and time in (British format).
// console.log(myDate.toLocaleTimeString()); --> It will give current time in (HH/mm/ss) {12 hr} format.
// console.log(myDate.getDate()); // It will return only date.
// console.log(myDate.getDay()); // In js day start from 1 to 7. ex Mon-1 & so on.
// console.log(myDate.getFullYear()); // It will return year (2024).
// console.log(myDate.getHours()); // It will return hour
// console.log(myDate.getMinutes()); // It will return minutes. 
// console.log(myDate.getSeconds()); // It will return seconds.
// console.log(myDate.getMilliseconds); // It will return milli.
// console.log(myDate.getTimezoneOffset); // It will return the current time zone. 
// console.log(myDate.toISOString()); //It will return date & time in UTC(Coordinated universal time) format.
// console.log(myDate.toJSON()); //It will also return date & time in UTC. 



// In JS Month starts from 0 to 11.
// Whenever we pass date inside date object, toLocaleString method will return only date in american format.

let myCreatedDate = new Date(2023, 0, 23); // (YY,MM,DD). 
//console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023. 
//console.log(myCreatedDate.toLocaleString()); // (MM,DD,YY) & (12:00:00 AM).

let CreateDate = new Date("09-04-2024"); // (MM,DD,YY)
// console.log(CreateDate.toLocaleString()); // (MM,DD,YY) & (12:00:00 AM)-> this is explicitly set to midnight and is done by js itself. 
// console.log(CreateDate.getFullYear()); // 2024
// console.log(CreateDate.getMonth()); // 4
// console.log(CreateDate.getDay()); // 3-> Wednesday

let myTimeStamp = Date.now();// returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix epoch)
// console.log(myTimeStamp);// result comes in millimeter.
// console.log(Math.floor(Date.now()/1000)); // convert into seconds.

let newDate = new Date().toLocaleString("default", { // define the date according to your Customization.
  weekday: "long",
}); 
// console.log(newDate); //It will print the day in long format like:- Tuesday,Wednesday. 








