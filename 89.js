// same method in subclass

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
class Dog extends Animal{
   constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
   }
   eat(){
    return `modified eat: ${this.name} is eating`;
   }
   run(){
        return `${this.name} is running at ${this.speed}kmh`;
   }
}
// Object // Instance
const tommy = new Dog('tommy',3 , 75);
console.log(tommy.run());
console.log(tommy.eat());