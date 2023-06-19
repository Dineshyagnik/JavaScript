// const user1={
//     firstName:'Jyoti',
//     lastName:'priya',
//     email:'jyotipriya77@gmail.com',
//     age:18,
//     adress:'House Number , colony , pincode , state',
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age >=18;
//     }
// }
// const userInfo=user.about();
// console.log(userInfo);

// function(that function create object)
// 2) add key value pair 
// 3) return object 
function createUser(firstName,lastName,email,age,adress){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.adress=adress;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18=function(){
        return this.age >=18;
    }
    return user;
}

const user1=createUser('Jyoti','priya','jyotipriya123@gmail.com',17,'my Adress');
console.log(user1);
const is18=user1.is18();
const about=user1.about();
console.log(is18);
console.log(about);