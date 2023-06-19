// static method and properties 

class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc='static property';
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
      const [firstName,lastName] = fullName.split("  ");
      this.firstName=firstName;
      this.lastName=lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }
    isAge(){
        return this.age<=1;
    }
    allAge(){
        return true;
    }
}
const person1 = new person("Jyoti","priya",18);
// console.log(person1.eat());
console.log(person.desc)
console.log(person.classInfo());
;