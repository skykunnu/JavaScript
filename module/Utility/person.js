// You can use export default only one time in a file. 

export default class Person{
    constructor(firstName,LastName,age){
        this.firstName=firstName;
        this.LastName=LastName;
        this.age=age;
    }
    info(){
        console.log(this.firstName,this.LastName,this.age);
    }
}

export  class Person2{
    constructor(firstName,LastName,age){
        this.firstName=firstName;
        this.LastName=LastName;
        this.age=age;
    }
    info(){
        console.log(this.firstName,this.LastName,this.age);
    }
}