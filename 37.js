// difference between dot and bracket notation
const key="email";
const person={
    name:"Hari",
    age:22,
    "person hobbies":["cricket","singing","writiing"]
}

// console.log(person["person hobbies"]);
person[key] ="abc@test.com";
console.log(person);