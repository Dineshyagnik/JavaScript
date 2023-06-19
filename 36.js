// objects - reference type
// arrays are good but not sufficient for real world data
// objects sotre key value pairs
// objects don't have index

// how to create objects

// const person={name:"Hari", age:45};
const person={
    name:"Hari",
    age:22,
    hobbies:["cricket","singing","writiing"]
}
console.log(person);
// console.log(typeof person);


// how to access data from objects

// console.log(person.name);
// console.log(person["name"]);
// console.log(person.age);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to object 
// person.gender="male";
// console.log(person);
person["gender"]="male";
console.log(person);