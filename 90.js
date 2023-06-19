// getter and setters

class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // setName(firstName,lastName){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    set fullName(fullName){
      const [firstName,lastName] = fullName.split("  ");
      this.firstName=firstName;
      this.lastName=lastName;
    }
}

const person1 = new person("harshit","vashi",19);
// console.log(person1.fullName());
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("Din","Bright");
// person1.firstName="Ram";
// person1.lastName="Shyam";
person1.fullName="Mohit vashi";
console.log(person1.fullName);

// console.log(person1.firstName);
// console.log(person1.lastName);