// methods 
// function inside object 

// const person = {
//     firstName:"harshita",
//     age:45,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// person.about();


function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName:"harshita",
    age:45,
    about:personInfo
}
const person2 = {
    firstName:"Jyoti",
    age:19,
    about:personInfo
}
const person3 = {
    firstName:"priya",
    age:18,
    about:personInfo
}
person1.about();
person2.about();
person3.about();