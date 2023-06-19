// default parameters 

// function addTwo(a,b){
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);        //NaN


// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);        //5



// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);           //4


// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
// const ans = addTwo(4,9);
// console.log(ans);           //13



// function addTwo(a,b=0){
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);           //4



function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(4,8);
console.log(ans);       //12