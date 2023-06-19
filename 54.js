// callback function 

// function myFunc(a){
//     console.log(a);
//     console.log("Hello world");
// } 
// myFunc([1,2,3,4,5]); // Array
// myFunc("Hari");  // String
// myFunc({name:'peter'});  // object


// function myFunc2(){
//     console.log("inside function");
// }

// function myFunc(callback){
//     console.log("Hello myFunc");
//     callback(); 
// } 

// myFunc(myFunc2);



function myFunc2(name){
    console.log("inside function");
    console.log(`my name is ${name}`);
}

function myFunc(callback){
    console.log("Hello myFunc");
    callback('gaba'); 
} 

myFunc(myFunc2);