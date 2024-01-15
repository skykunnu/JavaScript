class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    logMe(){
        console.log(`Username id is  ${this.username}`);
    }

}
// The extends keyword is used to create a child class of another class(parent).
class Teacher extends User{
    constructor(username,email,password){
/*The super() method refers to the parent class. 
By calling the super() method in the constructor method, 
we call the parent's constructor method and gets access to the parent's properties and methods. */
        super(password)  
        this.username=username
        this.email=email

    }
 
    addCourse(){
        super.logMe();
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")
// console.log(chai.addCourse()); // 
console.log(chai.addCourse());