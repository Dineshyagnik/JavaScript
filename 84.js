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
// console.log(user1);
// console.log(user1.is18());

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
    
}