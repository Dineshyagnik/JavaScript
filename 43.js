// nested destructuring 

// const users=[
//     {userId:1, firstname:'din', gender:'male'},
//     {userId:2, firstname:'jeenu', gender:'female'},
//     {userId:3, firstname:'jyoti', gender:'female'}
// ]

// const [user1,user2,user3]=users;
// console.log(user1);

const users=[
    {userId:1, firstname:'din', gender:'male'},
    {userId:2, firstname:'jeenu', gender:'female'},
    {userId:3, firstname:'jyoti', gender:'female'}
]

const [{firstname:userfirstname,userId},,{gender:user3gender}]=users;
console.log(userfirstname);
console.log(userId);
console.log(user3gender);
