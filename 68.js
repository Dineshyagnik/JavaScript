// Maps
// Map is an iterable


// store data in order fashion

// store key value pair like(object)
// duplicate keys are not allowed like(objects)

// difference between maps and objects 

// objects can only have string or symbol as key 

// in maps you can use anything as key
// like array , number , string 

// object literals 
// const person = {
//     firstName:'Harshit',
//     age:22,
//     1:'one'
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     // console.log(key);
//     console.log(typeof key);
// }

// const person = new Map();
// person.set('firstName','Harshita');
// person.set('age',22);
// person.set(1,'one');
// console.log(person);
// person.set('1,two','onetwo')
// console.log(person.get("firstName"));
// console.log(person.get(1));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key,typeof key);
// }

// for(let key of person){
//     console.log(Array.isArray(key));
// }


// for(let [key,value] of person){
//     console.log(key , value);
// }

const person1={
    id:1,
    firstName:'Harshita'
}
const person2={
    id:2,
    firstName:'Sita'
}
const userInfo = new Map();
userInfo.set(person1,{age:34,gender:"female"});
userInfo.set(person2,{age:24,gender:"female"});
// console.log(userInfo);
console.log(person1.id);
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(person2).gender);

// const person = new Map([['firstName','Harshita'],['age',22]]);
// console.log(person);