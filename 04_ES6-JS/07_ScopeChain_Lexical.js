
/*
Scope--> Where you can access a specific variable or a function in the code. scope directly depends on lexical environment.

Lexical Environment--> Whenever a execution context is formed, a lexical environemnt is also created , lexical enviro is nothing buts a local memory alongwith the lexical environ of its parent.

ex- c() function is lexically(physically present) inside a() function. a() is lexically inside global scope. 

Working->
when js engine encouters a console.log(b) it tries to find b inside the local memory, if it's not present over there,
then it will go to its reference and goes to the lexical environment of its parents and now it will try to find in the a and it finds out b over there
and it just goes back and print the b inside a console.

Now Suppose, if b was not there inside a also, then it would have gone to the lexical enviro of a's parent and it would have tried to find in the
global lexical environment and again there was no b there, suppose we never declared b anywhere in our code. Now it goes to the lexical environemnt of the global's parent 
and it finds Null and hence the searching stops as we found out null.

*/


function a(){
var b=10;
c();
function c(){
    console.log(b);
}
}
a();


