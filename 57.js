// map method

const numbers=[3,4,6,1,8];

// const square=function(number){
//     return number*number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber = numbers.map(function(number){
//     return number*number;
// });
// console.log(squareNumber);

// const squareNumber = numbers.map((number)=>{
//     return number*number;
// });
// console.log(squareNumber);

// const squareNumber = numbers.map((number,index)=>{
//     return `index:${index} ${number*number}`;
// });
// console.log(squareNumber);

const users=[
    {firstname:"Jyoti" ,age:18},
    {firstname:"priya" ,age:19},
    {firstname:"kiara" ,age:22},
    {firstname:"Anushka" ,age:20}
 ]

 const userNames=users.map((user)=>{
    return user.firstname
 })
 console.log(userNames);