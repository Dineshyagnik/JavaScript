// new keyword 

// function createUser(Name,age){
//     this.Name=Name;
//     this.age=age;
// }
// createUser.prototype.about = function(){
//     console.log(this.Name,this.age);
// }
// const user1= new createUser('Dipi',21);
// // new keyword
// // create empty object this={}
// // return this

// console.log(user1.about());

function CreateUser(firstName, lastName, email, age, adress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.adress = adress;
    
}

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return 'oww owww oww ';
}

const user1 = new CreateUser('Jyoti', 'priya', 'jyotipriya123@gmail.com', 19, 'my Adress');
const user2 = new CreateUser('Anushka', 'sen', 'anushkasen@gmail.com', 20, 'my Adress');
const user3 = new CreateUser('kiara', 'ad', 'kiara@gmail.com', 23, 'my Adress');
console.log(user1);
console.log(user1.is18());