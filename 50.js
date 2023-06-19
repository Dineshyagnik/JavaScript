// block scope vs function scope 
// let and const are block scope 
// var is function scope

// {
//     let firstName="Din";
//     console.log(firstName);
// }
// // console.log(firstName);     // error - not accessible

// {
//     let firstName="jyoti";
//     console.log(firstName);
// }

// {
//     const firstName="Din";
//     console.log(firstName);
// }
// // console.log(firstName);     // error - not accessible

// {
//     const firstName="jyoti";
//     console.log(firstName);
// }

// {
//     const firstName="Din";
//     console.log(firstName);
// }


// {
//     const firstName="jyoti";
//     console.log(firstName);
// }

// const firstName="Jeenu";
// console.log(firstName);  


// {
//     var firstName="Din";
//     console.log(firstName);
// }
// console.log(firstName);

// {
//     var firstname="Dipi";
//     console.log(firstname);
// }

// {
//     // var firstname="Jyoti";
//     console.log(firstname);
// }

// if(true){
//     let firstname="Garima";
//     console.log(firstname);
// }
// console.log(firstname); //error

// function myApp(){
//     if(true){
//         let firstname="peter"
//         console.log(firstname);
//     }
//     console.log(firstname);     // error
// }
// myApp();

function myApp(){
    if(true){
        var firstname="peter"
        console.log(firstname);
    }
    if(true){
        console.log(firstname);
    }
    console.log(firstname); 
}
myApp();
