// object inside array
// very useful in real world application

const users=[
    {userId:1, firstname:'din', gender:'male'},
    {userId:2, firstname:'jeenu', gender:'female'},
    {userId:3, firstname:'jyoti', gender:'female'}
]
// console.log(users);

for(let user of users){
    // console.log(user);
    // console.log(user.userId);
    console.log(user.firstname);
}