// find method 

// const myArray=["Hello","catt","dog","lion"];

// function isLength3(string){
//     return string.length===3;
// }
// const ans=myArray.find((string)=>string.length===3);
// console.log(ans);

const users=[
    {userId:1, userName:"Jyoti"},
    {userId:2, userName:"Priya"},
    {userId:3, userName:"Babu"},
    {userId:4, userName:"Bbay"},
];

const myUser= users.find((user)=>{
    return user.userId===1;
});
console.log(myUser);