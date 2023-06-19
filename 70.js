// optional chaining 

const user = {
    firstName:"Harshita",
    // adress:{HouseNumber:3555}
}

console.log(user.firstName);
// console.log(user.adress);
console.log(user?.adress?.HouseNumber);