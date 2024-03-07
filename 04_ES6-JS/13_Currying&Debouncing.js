// Currying

// Currying function
function Add(a){
    return function(b){
        return function(c){
            return a+b+c; // this will not execute unless all the parameters are present. 
        }
    }
}
console.log(Add(2)(3)(4));


// Practical Example
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject ${subject}: ${body} `);
        }
    }
}

let step1=sendAutoEmail("skykunnu@gmail.com");
let step2=step1("New Order Confirmation"); // Using previous function to get the output
step2("Hey Shikhar, Here is something for you"); // Again using previous function to get the output.

