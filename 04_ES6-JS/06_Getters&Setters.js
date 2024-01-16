class User{
    constructor(email,password){
        this.email=email;
        this._password=password;
    }
    get password(){ // it gets the modified value.
       return `${this._password.toUpperCase()} shikhar`;
    }
    set password(value){ // It sets the new value.
        this._password=value;
    }
}

// The use of Underscore is to avoid name collision. first the password is changed to _password to avoid name collision with the getter and setter. 
const Shikhar=new User("shikhar@gmail.com","abc");
console.log(Shikhar.password); // this will print the old value ABC shikhar
Shikhar.password="cde";
console.log(Shikhar.password); // this will print the new value CDE shikhar
