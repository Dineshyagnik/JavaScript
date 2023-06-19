class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isAge(){
        return this.age<=1;
    }
    allAge(){
        return true;
    }
}

// const animal1 = new Animal('cat',1);
// console.log(animal1);
// console.log(animal1.eat());

class Dog extends Animal{
   
}

const tommy = new Dog('tommy',3);
console.log(tommy);