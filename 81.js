function hello(){
    console.log('Hello world');
}
// hello();

// const hello=['value1'];
// const hello = {};

// javascript function ==> function + Object 
// console.log(hello.name);
// hello.myOwnproperty='unique value';
// console.log(hello.myOwnproperty);

// name property ==> tells function name

// function provides more useful properties 

// console.log(hello.prototype);

// only function provides prototype property 

// if(hello.prototype){
//     console.log('prototype is present ');
// }
// else{
//     console.log('prototype is not present');
// }

hello.prototype.abc='abc';
hello.prototype.xyz='xyz';
hello.prototype.sing=function(){
    return 'lallala';
}
console.log(hello.prototype.sing());