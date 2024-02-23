//AJAX--> Asynchronous JavaScript And XML.

//HTTP request--> medium to talk between client and server.


/*
1. It is a set of web development techniques.
2. It is used to create asynchronous web applications (client-side).
3. using Ajax, web applications can send and retrieve data from a server asynchronously(in the background)
without interfering with the display and behaviour of the existing page. 
4. We don't use data in XML format anymore but we use JSON now. 

# We have 3 most common ways to create and send request to server
1. XML HTTP Request (Old way of doing)
2. Fetch API (new way of doing) (ES6)
3. Axios (this is a third party library)
*/
//----------------------------------------------------------------------------------------

let fetchBtn=document.getElementById("fetchBtn");

fetchBtn.addEventListener("click",buttonClickHandler);
function buttonClickHandler(){
    console.log("you have clicked the fetchbtn");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
   //open the object
//    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true); // open means from where you will bring the data, what type of request it will be , GET--> means will give an URL and in return will get the data from URL,true--> means asynchronous (no blocking)
// if false would be there at the place of true then it will block the further requests and code.
   

   // Use this for POST Request
   xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
   xhr.getResponseHeader('Content-type','application/json'); // You are sending the form data in URL itself.
   
   
   
   // what to do on progress (Optional)
   xhr.onprogress=()=>{
    console.log('On Progress');
   }
// what to do when response is ready--> start onload method.
//    xhr.onreadystatechange=()=>{
//     console.log("ready state is",xhr.readyState);
//    }
   xhr.onload=()=>{
    // used to check whether item is present or not.
    if(xhr.status===200){
        console.log(xhr.responseText);
        
    }
    else{
        console.log("Some error occured");
    }
   }

   // send the request

  params= `{"name":"test","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("we are done");
}
