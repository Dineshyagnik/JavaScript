// arrow function 
const user1={
    firstName:'harshit',
    age:12,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}

user1.about();