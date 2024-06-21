// arguments-> It is an array-like object accessible in normal function that contains the value of arguments passed to that function.

// argument object has only one property which is length property and also we can loop over the argument object. 


const add=function(){
    console.log(arguments)
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}

add(1,2,3,4,5);
