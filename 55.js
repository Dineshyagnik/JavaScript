// function return  function 

// function myFunc(){
//     // return "a";
//     // return [1,2,3,4];
//     function hello(){
//         return "Hello world";
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());


function myFunc(){
    return function(){
        return "Hello HII"
    }; 
}

const ans = myFunc();
console.log(ans());