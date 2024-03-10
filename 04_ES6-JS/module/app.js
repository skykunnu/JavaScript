import { firstName } from "./Utility/fname.js"
import {age} from "./Utility/age.js"
import Person,{Person2} from "./Utility/person.js" // when using export default there is no need of curly braces and as you can see Person 2
// is in curly braces means it is not export default.
// console.log(firstName, age);
const person=new Person("Shikhar","khandelwal","22");
const person2=new Person2("dev","khandelwal","22");
console.log(person);
console.log(person2);