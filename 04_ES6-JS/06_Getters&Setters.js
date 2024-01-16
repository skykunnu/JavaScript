class Person{
    constructor(firstName,LastName,age){
        this.firstName=firstName;
        this.LastName=LastName;
        this.age=age;
    }
    fullName(){ // 
        return `${this.firstName} ${this.LastName}`;
    }
}

const person1=new Person("Shikhar","Khandelwal",23);
console.log(person1.fullName()); // Shikhar khandelwal
// To use fullname as property rather than method.
console.log(person1.fullName);// this will return whole function.
