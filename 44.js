// function 

// function singHappyBirthday(){
//     console.log("Happy Birthday to you...");
// }
// singHappyBirthday();


// function twoplusfour(){
//  return 2+4;
// }
// console.log(twoplusfour());
// const returnedvalue= twoplusfour();
// console.log(returnedvalue);


// function sumTwoNumbers(num1,num2){
//     return num1+num2;
// }
// const returnedvalue=sumTwoNumbers(5,9);
// console.log(returnedvalue);


// function sumThreeNumbers(num1,num2,num3){
//     return num1+num2+num3;
// }
// const returnedvalue=sumThreeNumbers(3,6,9);
// console.log(returnedvalue);


// function isEven(num){
//     if(num % 2===0){
//         return true;
//     }
//     else{
//         return false;
//     };
// };
// console.log(isEven(2));


// function isEven(num){
//     if(num % 2===0){
//         return true;
//     }
//     return false;
// };
// console.log(isEven(3));


// function isEven(num){
//     return num % 2 ===0;
// };
// console.log(isEven(2));


// function 
// input:character 
// output :first character

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("jeenu"));


// function 
// input : array , target (number)
// output : index of target if present in array 

function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [10,20,30,40,80];
const ans = findTarget(myArray,10);
console.log(ans);
