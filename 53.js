// parameter destructuring 

// obj
// React

const person ={
    firstname:"Jyoti",
    gender:"female",
    age:17
}

// function printDetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
//     console.log(obj.age);   // undefined
// }
// printDetails(person);

function printDetails({firstname,gender,age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}
printDetails(person);