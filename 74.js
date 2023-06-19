const user1 = {
    firstName:'jyoti',
    age:18,
    about:function(){
        console.log(this.firstName, this.age);
    }
}

// user1.about();
const myfunc = user1.about.bind(user1);
myfunc();