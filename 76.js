// const user1={
//     firstName:'Jyoti',
//     age:18,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// }

const user1={
    firstName:'Jyoti',
    age:18,
    about(){
        console.log(this.firstName,this.age);
    }
}
user1.about();
