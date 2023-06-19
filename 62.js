// every method 

// const numbers=[2,4,6,1,8,10];

// const ans = numbers.every((number)=>{
//     return number%2===0;
// });
// console.log(ans);

const userCart=[
    {productId:1, productName:"Mobile", price:12200},
    {productId:2, productName:"Laptop", price:12200},
    {productId:3, productName:"TV", price:12200},
];

const result=userCart.every((cartItem)=>{
    return cartItem.price <30000;
});
console.log(result);