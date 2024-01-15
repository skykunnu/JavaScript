class User{
    constructor(username){
        this.username=username;

    }

    logMe(){
       console.log(`Username: ${this.username}`);
    }

static createId(){ /*static members are associated with the class itself rather than with instances of the class.
this means that you can access static methods or properties without creating an instance of the class.*/
    return `123`
}


}

const shikhar =new User("shikhar")
console.log(shikhar.createId()); // this will give an erorr becoz you are using an instance of class to access static methods or properties.
console.log(User.createId()); // 123, becoz using the class itself to access static method.
