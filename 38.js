// how to iterate object

const person={
    name:"Hari",
    age:22,
    "person hobbies":["cricket","singing","writiing"]
}

// for in loop
// object.keys

for(let key in person ){
    // console.log(person);
    // console.log(key);
    // console.log(person[key]);
    // console.log(`${key}:${person[key]}`);
    // console.log(key,":",person[key]);
}

// console.log(Object.keys(person));
// console.log(typeof(Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);


 for(let key of Object.keys(person)){
    // console.log(key);
    //  console.log(person[key]);0
     console.log(`${key}:${person[key]}`);
 }

// console.log(Object.entries(person));