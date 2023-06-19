// function expression 

// function singHappyBirthday(){
//     console.log("Happy Birthday to you...");
// }

const singHappyBirthday = function(){
    console.log("Happy Birthday to you...");
}
singHappyBirthday();

// function twoplusfour(){
//  return 2+4;
// }

const twoplusfour= function(){
    return 2+7;
}
 const ans = twoplusfour();
 console.log(ans);

// function sumTwoNumbers(num1,num2){
//     return num1+num2;
// }

const sumTwoNumbers = function(num1,num2){
    return num1+num2;
}
const ans2 = sumTwoNumbers(10,10);
console.log(ans2);

// function sumThreeNumbers(num1,num2,num3){
//     return num1+num2+num3;
// }

const sumThreeNumbers = function(num1,num2,num3){
    return num1+num2+num3;
}
const ans3= sumThreeNumbers(10,10,10);
console.log(ans3);


// function isEven(num){
//     if(num % 2===0){
//         return true;
//     }
//     else{
//         return false;
//     };
// };



// function isEven(num){
//     if(num % 2===0){
//         return true;
//     }
//     return false;
// };


// function isEven(num){
//     return num % 2 ===0;
// };

const isEven = function(num){
    return num % 2 ===0;
}
const ans4= isEven(2);
console.log(ans4);


// function firstChar(anyString){
//     return anyString[0];
// }

const firstChar = function(anyString){
    return anyString[0];
}
const ans5= firstChar("Jyoti");
console.log(ans5);


// function findTarget(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

const findTarget = function(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1
}
const ans6 = findTarget([2,4,7,8],7);
console.log(ans6);
