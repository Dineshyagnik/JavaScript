// class keyword 
// es6---2015
// class is fake


class CreateUser {
    constructor(firstName, lastName, email, age, adress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.adress = adress;
    }
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return 'oww owww oww ';
    }
    func(a){
        console.log(a);
    }
}

// function CreateUser(firstName, lastName, email, age, adress) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.adress = adress;

// }

// CreateUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function () {
//     return 'oww owww oww ';
// }

const user1 = new CreateUser('Jyoti', 'priya', 'jyotipriya123@gmail.com', 19, 'my Adress');
const user2 = new CreateUser('Anushka', 'sen', 'anushkasen@gmail.com', 20, 'my Adress');
const user3 = new CreateUser('kiara', 'ad', 'kiara@gmail.com', 23, 'my Adress');

// console.log(Object.getPrototypeOf(user1))
user1.func(12);