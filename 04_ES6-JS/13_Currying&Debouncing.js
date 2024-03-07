// Currying


// function Addition(a,b,c){
//     return a+b+c;
// }
// let res=Addition(2,3,4);
// console.log(res);


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
