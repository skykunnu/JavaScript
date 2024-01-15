class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }


    encryptPassword(){
       return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const chai=new User("chai","chai@gmail.com","123");
// console.log(chai.encryptPassword()); // 123abc
// console.log(chai.changeUsername()); // CHAI




// behind the scene
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

user.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`;
}
const coffee=new user("Coffee","Coffee@gmail.com","234");
// console.log(coffee.encryptPassword()); //234abc
// console.log(coffee.changeUsername()); //COFFEE