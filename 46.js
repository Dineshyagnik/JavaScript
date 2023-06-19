// Arrow function

// const singHappyBirthday = function(){
//     console.log("Happy Birthday to you...");
// }

const singHappyBirthday =()=>{
    console.log("Happy Birthday to you...");
}
singHappyBirthday();


// const twoplusfour= function(){
//     return 2+7;
// }
const twoplusfour= ()=>{
    return 2+7;
}
const sum= twoplusfour();
console.log(sum);

// const sumTwoNumbers = function(num1,num2){
//     return num1+num2;
// }
const sumTwoNumbers = (num1,num2)=>{
    return num1+num2;
}
const sum2=sumTwoNumbers(3,8);
console.log(sum2);


// const sumThreeNumbers = function(num1,num2,num3){
//     return num1+num2+num3;
// }


const sumThreeNumbers = (num1,num2,num3)=>{
    return num1+num2+num3;
}
const sum3=sumThreeNumbers(4,4,4);
console.log(sum3);


// const isEven = function(num){
//     return num % 2 ===0;
// }

// const isEven = (num)=>{
//     return num % 2 ===0;
// }
// console.log(isEven(5));

// const isEven = num=>{
//     return num % 2 ===0;
// }
// console.log(isEven(6));

const isEven = num=> num % 2 ===0;
console.log(isEven(7));

// const firstChar = function(anyString){
//     return anyString[0];
// }


// const firstChar = (anyString)=>{
//     return anyString[0];
// }
// console.log(firstChar("jyoti"));


// const firstChar = (anyString)=>anyString[0];
// console.log(firstChar("jyoti"));

const firstChar = anyString=>{
    return anyString[0];
}
console.log(firstChar("jyoti"));

// const findTarget = function(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }

const findTarget = (array,target)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1
}
console.log(findTarget([3,5,78],78));



// function func(){
//     console.log("Happy func");
// }
// func();

// const func=function(){
//     console.log("Happy func");
// }
// func();

// const func=()=>{
//     console.log("Happy func3");
// }
// func();



// function add(){
//     console.log(2+3);
// }
// add();

// const add=function(){
//     console.log(2+33);
// }
// add();

const add=()=>{
    console.log(22+33);
}
add();