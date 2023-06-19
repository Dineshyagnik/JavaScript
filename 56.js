// important array methods 

// for each 
// map 
// filter
// reduce 

// const numbers1 = [4,2,5,8];

// function multiplyby2(number,index){
//     // console.log("index is ", index);
//     // console.log(`${number}*2 = ${number*2}`);
//     console.log(`index is ${index} number is ${number}`);
// }

// for(let i=0;i<numbers1.length;i++){
//     multiplyby2(numbers1[i],i)
// }

// const numbers = [4,2,5,8];
//  function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
//  }

//  numbers.forEach(myfunc);

// const numbers = [4,2,5,8];

// numbers.forEach(function(number,index){
//    console.log(`index is ${index} number is ${number}`);
// });

//  const numbers =[2,4,5,6];

//  numbers.forEach(function(number,index){
//    console.log(number*3,index);
//  });

const users=[
   {firstname:"Jyoti" ,age:18},
   {firstname:"priya" ,age:19},
   {firstname:"kiara" ,age:22},
   {firstname:"Anushka" ,age:20}
]

// users.forEach(function(user){
//    console.log(user.firstname);
// });

users.forEach((user,index)=>{
   console.log(user.firstname,index);
})

// for(let user of users){
//    console.log(user.firstname);
// }