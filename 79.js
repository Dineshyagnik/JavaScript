const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18:function(){
        return this.age >=18;
    },
    sing:function(){
        return 'oww owww oww ';
    }
}
function createUser(firstName,lastName,email,age,adress){
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.adress=adress;
    
    return user;
}

const user1=createUser('Jyoti','priya','jyotipriya123@gmail.com',17,'my Adress');
const user2=createUser('Anushka','sen','anushkasen@gmail.com',20,'my Adress');
const user3=createUser('kiara','ad','kiara@gmail.com',23,'my Adress');
console.log(user1);
console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());
// console.log(user3.sing());

